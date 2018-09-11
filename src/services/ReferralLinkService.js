import axios from 'axios';
import { api_service_url, auction_address } from '../../config/common-paths';
const poolContractAbi = require('../../contracts/Pool.json').abi;

export const validateReferral = () => {
    return new Promise((resolve, reject) => {
        const web3 = window.web3;
        if (!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            reject('No web3!');
        }

        const poolContract = web3.eth.contract(poolContractAbi).at(auction_address);
        const account = web3.eth.accounts[0];
        if (!account) {
            reject('No account!');
        }

        web3.eth.getTransactionCount(account, (error, txCount) => {
            if (error) {
                reject(error);
            }
            poolContract.withdraw({
                nonce: txCount,
                from: auction_address,
                to: account
            }, (err, transactionId) => {
                if (err) {
                    reject(error);
                } else {
                    axios.post(api_service_url + '/transaction/create', {
                        address: account,
                        transaction_id: transactionId,
                        transaction_type: 'Withdraw'
                    }).then(() => {
                        resolve(transactionId);
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        });
    });
};
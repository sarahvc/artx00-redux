//import axios from 'axios';
import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/TestToken.json').abi;


export const placeBid = (bid) => {
    const web3 = window.web3;
    const appContract = web3.eth.contract(appContractAbi).at(app_contract_address);
    const account = web3.eth.accounts[0];
    appContract.endTxNew(account, bid.eth, bid.keys, bid.appraisal);
    /*
    //return new Promise((resolve, reject) => {
        const web3 = window.web3;
        if(!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            //reject('No web3!');
            console.log('No web3!');
        }

        const appContract = web3.eth.contract(appContractAbi).at(app_contract_address);
        const account = web3.eth.accounts[0];
        if(!account) {
            //reject('No account!');
            console.log('No account!');
        }

        web3.eth.getTransactionCount(account, (error, txCount) => {
            if(error) {
                //reject(error);
                console.log(error);
            }
            appContract.endTxNew(account, bid.eth, bid.keys, bid.appraisal, {
                nonce: txCount,
                from: account
            }, (err, transactionId) => {
                if(err) {
                    reject(error);
                    console.log(error);
                } else {
                    // axios.post(api_service_url + '/transaction/create', {
                    //     address: account,
                    //     transaction_id: transactionId,
                    //     transaction_type: 'PlaceBid'
                    // }).then(response => {
                    //     console.log(response);//added for the warning about not using response
                    //     resolve(transactionId);
                    // }).catch((err) => {
                    //     reject(err);
                    // });
                    console.log('should post to server');
                }
            });
        });
    //});
    */
};
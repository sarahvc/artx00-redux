import { api_service_url } from '../../config/common-paths';
import axios from 'axios';

export const getAccountDetails = () => {
    return new Promise((resolve, reject) => {
        const web3 = window.web3;
        if(!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            reject('No web3!');
        }

        const account = web3.eth.accounts[0];
        if(!account) {
            reject('No account!');
        }

        axios.get(api_service_url + '/auction/' + account)
            .then( response => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
    });
};
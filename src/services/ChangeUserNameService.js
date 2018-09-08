import axios from 'axios';
import { api_service_url } from '../../config/common-paths';


export const subsribe = (username) => {
    return new Promise((resolve, reject) => {
        const web3 = window.web3;
        if(!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            reject('No web3!');
        }

        const account = web3.eth.accounts[0];
        if(!account) {
            reject('No account!');
        }

        axios.post(api_service_url + '/account/update', {
            address: account,
            userName: username
        }).then(response => {
            console.log(response);//added for the warning about not using response
            resolve(username);
        }).catch((err) => {
            reject(err);
        });
    });
};
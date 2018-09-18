import axios from 'axios';
import { api_service_url } from '../../config/common-paths';


export const subsribe = (email) => {
    return new Promise((resolve, reject) => {
        const web3 = window.web3;
        if(!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            reject('No web3!');
        }

        const account = web3.eth.accounts[0];
        if(!account) {
            reject('No account!');
        }

        axios.post(api_service_url + '/register', {
            addr: account,
            email: email
        }).then(response => {
            console.log(response);//added for the warning about not using response
            resolve(email);
        }).catch((err) => {
            reject(err);
        });
    });
};
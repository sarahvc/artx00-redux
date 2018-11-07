import axios from 'axios';
import { api_service_url } from '../../config/common-paths';

export const subscribeToARTX = (email) => {
    return new Promise((resolve, reject) => {
        //get account
        window.ethereum.enable()
            .then(accounts => {
                axios.put(api_service_url + '/register', {
                    addr: accounts[0],
                    email: email
                }).then(response => {
                    console.log(response);//added for the warning about not using response
                    resolve(email);
                }).catch((err) => {
                    reject(err);
                });
            });
    });
};
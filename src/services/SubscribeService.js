import axios from 'axios';
import { api_service_url } from '../../config/common-paths';

export const subscribeToARTX = (email) => {
    return new Promise((resolve, reject) => {
        //get account
        let account = '0x230fFFe09d99D902086C6e7Ca719455fB6587F27';

        axios.put(api_service_url + '/register', {
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
import { api_service_url } from '../../config/common-paths';
import axios from 'axios';
//import Web3 from 'web3';

// function getAccount() {
//     return new Promise((resolve, reject) => {
//         window.ethereum.enable()
//             .then(accounts => {
//                 console.log(accounts[0]);
//                 resolve(accounts[0]);
//             }).catch((err) => {
//                 reject(err);
//             });
//     });
// }

export const getAccountHead = () => {
    return new Promise((resolve, reject) => {
        window.ethereum.enable()
            .then(accounts => {
                axios.get(api_service_url + '/register/' + accounts[0])
                    .then(response => {
                        resolve(response.data);
                    }).catch((err) => {
                        reject(err);
                    });
            }).catch((err) => {
                reject(err);
            });  
    });
};
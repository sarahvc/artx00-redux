import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import Web3 from 'web3';

export const getReferLink = () => {
    return new Promise((resolve, reject) => {
        var web3 = new Web3(Web3.givenProvider);

        const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);

        let refercode = window.location.href.slice(9);

        if (refercode.length != 0) {
            appContract.methods.checkReferCode(refercode).call(function(error, result){
                if(!error) {
                    console.log('check valid result');
                    console.log(result);
                    if (result == true) {
                        resolve(refercode);
                    } else {
                        console.log('code not valid');
                        resolve('');
                    }
                } else {
                    reject(error);
                }
            });
        } else {
            resolve(refercode);
        }  
    });
};

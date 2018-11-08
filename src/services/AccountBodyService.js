import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import Web3 from 'web3';

export const getAccountBody = () => {
    return new Promise((resolve, reject) => {

        var web3 = new Web3(Web3.givenProvider);
        const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);

        window.ethereum.enable()
            .then(accounts => {
                appContract.methods.getPlayerInfoByAddress(accounts[0]).call(function(error, result){
                    if(!error) {
                        let testarray=[];
                        for (let i=0; i<6; i++) {
                            testarray[i]=result[i];
                        }
                        console.log('bodyresult');
                        console.log(testarray);
                        resolve(testarray);
                    } else {
                        reject(error);
                    }
                });
            }).catch((err) => {
                reject(err);
            });
    });
};
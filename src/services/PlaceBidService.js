import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import { api_service_url } from '../../config/common-paths';
import axios from 'axios';
import Web3 from 'web3';

export const placeBid = (bid) => {
    return new Promise((resolve, reject) => {
        var web3 = new Web3(window.ethereum);
        const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);

        window.ethereum.enable()
            .then(accounts => {
                appContract.methods.buyXidNew(bid.rfcode, bid.appraisal).call(function(error, result){
                    if(!error) {
                        console.log(result);
                        
                        axios.get(api_service_url + '/code/' + accounts[0])
                            .then( response => {
                                if (response.data.code == null) {
                                    axios.post(api_service_url + '/code/', {
                                        'addr': accounts[0]
                                    })
                                        .then(response => {
                                            console.log('return refer code');
                                            console.log(response.data.code);
                                            resolve(response.data.code);
                                        }).catch((err) => {
                                            reject(err);
                                        });
                                } else {
                                    console.log('should be null refer code');
                                    resolve(response.data.code);
                                } 
                            }).catch((err) => {
                                reject(err);
                            });
                    } else {
                        reject(error);
                    }
                });
            }).catch((err) => {
                reject(err);
            });
    });
};
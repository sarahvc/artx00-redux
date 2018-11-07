import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
//import { api_service_url } from '../../config/common-paths';
//import axios from 'axios';
import Web3 from 'web3';

export const placeBid = (bid) => {
    return new Promise((resolve, reject) => {
        var web3 = new Web3(Web3.givenProvider);
        const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);
        //let rfCodeExist;

        //need to get account
        //let account = '0x230fFFe09d99D902086C6e7Ca719455fB6587F27';

        appContract.methods.buyXidNew(bid.rfcode, bid.appraisal).call(function(error, result){
            if(!error) {
                console.log(result);
                /*
                axios.get(api_service_url + '/code/' + account)
                    .then( response => {
                        if (response.data == null) {
                            axios.post(api_service_url + '/code/', {
                                "addr": account
                            })
                            .then( response => {
                                resolve(response.data);
                            }).catch((err) => {
                                reject(err);
                            });
                        } else {
                            resolve(response.data);
                        } 
                    }).catch((err) => {
                        reject(err);
                    });

                } else {
                    rfcode =  rfCodeExist.code;
                }
                */
            } else {
                reject(error);
            }
        });

    });
};
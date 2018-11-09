import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import { api_service_url } from '../../config/common-paths';
import axios from 'axios';
import Web3 from 'web3';

const getSelfCode = (accnt) => {
    //check if there's code on the server
    axios.get(api_service_url + '/code/' + accnt)
        .then(response => {
            //no code on the server yet, generate one
            if (response.data.code == null) {
                axios.post(api_service_url + '/code/', { 'addr': accnt })
                    .then(response => {
                        //send out generated code
                        console.log('new code');
                        console.log(response.data.code);
                        return(response.data.code);
                    }).catch((err) => {
                        console.log(err);
                    });
            } else {
                //send out existing code
                console.log('old code');
                console.log(response.data.code);
                return(response.data.code);
            } 
        }).catch((err) => {
            console.log(err);
        });
};

export const placeBid = (bid) => {
    return new Promise((resolve, reject) => {
        var web3 = new Web3(window.ethereum);
        const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);
        

        window.ethereum.enable()
            .then(accounts => {
                //check if user's registered
                appContract.methods.getPlayerInfoByAddress(accounts[0]).call(function(error, result){
                    if(!error) {
                        if (result[0]=='') {
                            console.log(result[0]);
                            //not regitstered, register
                            const selfCode = getSelfCode(accounts[0]);
                            console.log(selfCode);
                            appContract.methods.registerID('name', bid.rfcode, selfCode).call(function(error){
                                //regitstered, proceed to place bid
                                if(!error) {
                                    web3.eth.sendTransaction({
                                        from: accounts[0],
                                        to: app_contract_address,
                                        value: bid.keys
                                    }, (error, transactionHash) => {
                                        if (error) {
                                            reject(error);
                                        } else {
                                            console.log(transactionHash);
                                            appContract.methods.buyXidNew(bid.rfcode, bid.appraisal).call(function(error, result){
                                                if(!error) {
                                                    console.log(result);   
                                                } else {
                                                    reject(error);
                                                }
                                            });
                                        }
                                    });  
                                } else {
                                    reject(error);
                                }
                            });
                        //regitstered, proceed to place bid
                        } else {
                            console.log(result[0]);
                            web3.eth.sendTransaction({
                                from: accounts[0],
                                to: app_contract_address,
                                value: bid.keys
                            }, (error, transactionHash) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    console.log(transactionHash);
                                    appContract.methods.buyXidNew(bid.rfcode, bid.appraisal).call(function(error, result){
                                        if(!error) {
                                            console.log(result);   
                                        } else {
                                            reject(error);
                                        }
                                    });
                                }
                            });
                        }
                    } else {
                        reject(error);
                    }
                });             
            }).catch((err) => {
                reject(err);
            });
    });
};
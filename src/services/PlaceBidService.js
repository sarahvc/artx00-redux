import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import { api_service_url } from '../../config/common-paths';
import axios from 'axios';
import Web3 from 'web3';

export const placeBid = (bid) => {
    var web3 = new Web3(Web3.givenProvider);
    const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);
    let rfcode = false, 
        rfCodeExist;

    //need to get account
    let account = '0x230fFFe09d99D902086C6e7Ca719455fB6587F27';
    /* need to insert this info into axios call
    {
	"addr": account
    }
    */

    appContract.methods.buyXidNew(bid.rfcode, bid.appraisal).call(function(error, result){
        if(!error) {
            console.log(result);

            rfCodeExist = new Promise((resolve, reject) => {
                axios.get(api_service_url + '/code/' + account)
                    .then( response => {
                        resolve(response.data);
                    }).catch((err) => {
                        reject(err);
                    });
            });

            if (!rfCodeExist.code) {
                rfcode = new Promise((resolve, reject) => {
                    axios.post(api_service_url + '/code/')
                        .then( response => {
                            resolve(response.data);
                        }).catch((err) => {
                            reject(err);
                        });
                });
            }

        } else {
            console.error(error);
        }
    });

    return rfcode;
};
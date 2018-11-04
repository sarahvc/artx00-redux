import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/Decentralism.json').abi;
import Web3 from 'web3';

export const getAuctionDetails = () => {
    var web3 = new Web3(Web3.givenProvider);
    const appContract = new web3.eth.Contract(appContractAbi, app_contract_address);
    
    appContract.methods.getAuctionDetails().call(function(error, result){
        if(!error) {
            return result;
            console.log('results ' + result);
        } else {
            console.error(error);
        }
    });
};
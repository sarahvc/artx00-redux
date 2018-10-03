import { app_contract_address } from '../../config/common-paths';
const appContractAbi = require('../../contracts/TestToken.json').abi;

export const getAuctionPrice = () => {
    const web3 = window.web3;
    const appContract = web3.eth.contract(appContractAbi).at(app_contract_address);
    appContract.getBuyPrice();
};
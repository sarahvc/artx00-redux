import { app_contract_address } from '../../config/common-paths';
const appContractAbi = [{'constant':true,'inputs':[],'name':'initEth_','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'','type':'uint256'}],'name':'addressIndexes','outputs':[{'name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'','type':'address'}],'name':'plyrs_','outputs':[{'name':'addr','type':'address'},{'name':'name','type':'string'},{'name':'win','type':'uint256'},{'name':'gen','type':'uint256'},{'name':'aff','type':'uint256'},{'name':'laff','type':'address'},{'name':'mask','type':'uint256'},{'name':'keys','type':'uint256'},{'name':'eth','type':'uint256'},{'name':'referCode','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'','type':'address'}],'name':'winner_','outputs':[{'name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[],'name':'startTime_','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor'},{'payable':true,'stateMutability':'payable','type':'fallback'},{'anonymous':false,'inputs':[{'indexed':true,'name':'playerAddress','type':'address'},{'indexed':false,'name':'playerName','type':'string'},{'indexed':false,'name':'isNewPlayer','type':'bool'},{'indexed':false,'name':'affiliateAddress','type':'address'},{'indexed':false,'name':'amountPaid','type':'uint256'},{'indexed':false,'name':'timeStamp','type':'uint256'}],'name':'onNewName','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'playerName','type':'string'},{'indexed':false,'name':'playerAddress','type':'address'},{'indexed':false,'name':'ethIn','type':'uint256'},{'indexed':false,'name':'keysBought','type':'uint256'},{'indexed':false,'name':'potAmount','type':'uint256'}],'name':'onEndTx','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'playerAddress','type':'address'},{'indexed':false,'name':'playerName','type':'string'},{'indexed':false,'name':'ethOut','type':'uint256'},{'indexed':false,'name':'timeStamp','type':'uint256'}],'name':'onWithdraw','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'playerAddress','type':'address'},{'indexed':false,'name':'playerName','type':'string'},{'indexed':false,'name':'ethOut','type':'uint256'}],'name':'onWithdrawAndDistribute','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'playerAddress','type':'address'},{'indexed':false,'name':'playerName','type':'bytes32'},{'indexed':false,'name':'ethIn','type':'uint256'},{'indexed':false,'name':'compressedData','type':'uint256'},{'indexed':false,'name':'compressedIDs','type':'uint256'},{'indexed':false,'name':'winnerAddr','type':'address'},{'indexed':false,'name':'winnerName','type':'bytes32'},{'indexed':false,'name':'amountWon','type':'uint256'},{'indexed':false,'name':'newPot','type':'uint256'},{'indexed':false,'name':'P3DAmount','type':'uint256'},{'indexed':false,'name':'genAmount','type':'uint256'}],'name':'onBuyAndDistribute','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'playerAddress','type':'address'},{'indexed':false,'name':'playerName','type':'string'},{'indexed':false,'name':'amountWon','type':'uint256'},{'indexed':false,'name':'pot','type':'uint256'}],'name':'onReLoadEnd','type':'event'},{'anonymous':false,'inputs':[{'indexed':false,'name':'affiliateAddress','type':'address'},{'indexed':false,'name':'affiliateName','type':'string'},{'indexed':false,'name':'amount','type':'uint256'},{'indexed':false,'name':'timeStamp','type':'uint256'}],'name':'onAffiliatePayout','type':'event'},{'constant':false,'inputs':[{'name':'_affCode','type':'string'},{'name':'_est','type':'uint256'}],'name':'buyXidNew','outputs':[],'payable':true,'stateMutability':'payable','type':'function'},{'constant':false,'inputs':[],'name':'withdraw','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[{'name':'_name','type':'string'},{'name':'_affCode','type':'string'},{'name':'_selfReferCode','type':'string'}],'name':'registerID','outputs':[],'payable':true,'stateMutability':'payable','type':'function'},{'constant':true,'inputs':[{'name':'_affCode','type':'string'}],'name':'checkReferCode','outputs':[{'name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'_addr','type':'address'}],'name':'getReferCode','outputs':[{'name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'name':'_addr','type':'address'},{'name':'_referCode','type':'string'}],'name':'setReferCode','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[],'name':'getBuyPrice','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'_addr','type':'address'}],'name':'getPlayerVaultsXAddr','outputs':[{'name':'','type':'uint256'},{'name':'','type':'uint256'},{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'_addr','type':'address'}],'name':'getPlayerInfoByAddress','outputs':[{'name':'','type':'string'},{'name':'','type':'uint256'},{'name':'','type':'uint256'},{'name':'','type':'uint256'},{'name':'','type':'uint256'},{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'_eth','type':'uint256'}],'name':'calcKeysReceivedNew','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'_keys','type':'uint256'}],'name':'iWantXKeysNew','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':true,'inputs':[{'name':'time','type':'uint256'}],'name':'calculateEndEth','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'name':'_winners','type':'address[]'},{'name':'_eth','type':'uint256'}],'name':'distributePotToWinner','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':false,'inputs':[],'name':'selectAddress','outputs':[{'name':'','type':'address[]'}],'payable':false,'stateMutability':'nonpayable','type':'function'}];

import { api_service_url } from '../../config/common-paths';
import axios from 'axios';


export const getAccountDetails = (account) => {
    let details,
        detailsArray;

    const web3 = window.web3;
    const appContract = web3.eth.contract(appContractAbi).at(app_contract_address);

    details = new Promise((resolve, reject) => {
        const web3 = window.web3;
        if(!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
            reject('No web3!');
        }

        if(!account) {
            reject('No account!');
        }

        axios.get(api_service_url + '/register/' + account)
            .then( response => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
    });

    appContract.getPlayerInfoByAddress(account, function(error, result){
        if(!error) {
            detailsArray = result[0];
            console.error(result[0]);
        } else {
            console.error(error);
        }
    });

    let labels = ['shares', 'totalEarnings', 'availabelEarnings', 'referralEarnings'];
    
    for (let i = 0; i < labels.length; i++) {
        details.push({key: labels[i], values: detailsArray[i+1]});
    }

    return details;
};
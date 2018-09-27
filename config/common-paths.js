const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    root: path.resolve(__dirname),
    template: './src/index.html',
    favicon: './src/favicon.ico',
    //api_service_url: 'http://127.0.0.1:3579',
    api_service_url: 'http://localhost:3579',
    //app_contract_address: '0x4a746397E9666642E48cBC3FB6308Fb6D782C4b4', 
    app_contract_address: '0xcbf2c35b04ea11a57f41f783409dc437ed7b6e7d', 
    //ropsten
    eth_network: '3',
    ether_scan: 'https://ropsten.etherscan.io/'
};
// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from './FetchZipCodesReducer';

import { FetchAccountsReducer } from './fetchAccountsWeb3';
//import { PlaceBidReducer } from './PlaceBidReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    accounts: FetchAccountsReducer,
    //form: formReducer,
    //placeBid: PlaceBidReducer
});
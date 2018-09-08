// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from './FetchZipCodesReducer';

import { FetchAccountsReducer } from './fetchAccountsWeb3';
//import { PlaceBidReducer } from './PlaceBidReducer';
//import { SubscribeReducer } from './SubscribeReducer';
//import { ChangeUserNameReducer } from './ChangeUserNameReducer';
//import { WithdrawReducer } from './WithdrawReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    accounts: FetchAccountsReducer,
    form: formReducer,
    //placeBid: PlaceBidReducer,
    //subscribe: SubscribeReducer,
    //changeUserName: ChangeUserNameReducer,
    //withdraw : WithdrawReducer
});
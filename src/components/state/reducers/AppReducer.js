// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// IMPORT REDUCERS

import { PlaceBidReducer } from './PlaceBidReducer';
import { SubscribeReducer } from './SubscribeReducer';
import { WithdrawReducer } from './WithdrawReducer';
import { FetchAccountDetailsReducer } from './AccountDetailsReducer';
import { FetchAuctionDetailsReducer } from './AuctionDetailsReducer';
import { FetchBidDetailsReducer } from './BidDetailsReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    form: formReducer,
    placeBidTo: PlaceBidReducer,
    subscribeTo: SubscribeReducer,
    withdrawTo : WithdrawReducer,
    accountDetails : FetchAccountDetailsReducer,
    auctionDetails : FetchAuctionDetailsReducer,
    bidDetails : FetchBidDetailsReducer
});
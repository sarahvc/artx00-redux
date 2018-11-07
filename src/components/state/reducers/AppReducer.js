// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// IMPORT REDUCERS

import { PlaceBidReducer } from './PlaceBidReducer';
import { SubscribeReducer } from './SubscribeReducer';
import { WithdrawReducer } from './WithdrawReducer';
import { FetchAccountHeadReducer } from './AccountHeadReducer';
import { FetchAccountBodyReducer } from './AccountBodyReducer';
import { FetchAuctionDetailsReducer } from './AuctionDetailsReducer';
import { FetchAuctionPriceReducer } from './AuctionPriceReducer';
import { FetchReferLinkReducer } from './ReferLinkReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    form: formReducer,
    placeBidTo: PlaceBidReducer,
    subscribeTo: SubscribeReducer,
    withdrawTo : WithdrawReducer,
    accountHead : FetchAccountHeadReducer,
    accountBody : FetchAccountBodyReducer,
    auctionDetails : FetchAuctionDetailsReducer,
    auctionPrice : FetchAuctionPriceReducer,
    referLink : FetchReferLinkReducer   
});
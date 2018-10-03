import { FETCH_AUCTION_PRICE_PENDING, FETCH_AUCTION_PRICE_FULFILLED, FETCH_AUCTION_PRICE_REJECTED } from '../actions/AuctionPriceActions';

const initialState = {
    price: 0,
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchAuctionPriceReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_AUCTION_PRICE_PENDING:
            return {
                ...state,
                price: 0,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_AUCTION_PRICE_FULFILLED:
            return {
                ...state,
                details: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_AUCTION_PRICE_REJECTED:
            return {
                ...state,
                price: 0,
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
import { FETCH_PRICE_PENDING, FETCH_PRICE_FULFILLED, FETCH_PRICE_REJECTED } from '../actions/AuctionPriceActions';

const initialState = {
    price: '',
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchAuctionPriceReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRICE_PENDING:
            return {
                ...state,
                price: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_PRICE_FULFILLED:
            return {
                ...state,
                price: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_PRICE_REJECTED:
            return {
                ...state,
                price: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
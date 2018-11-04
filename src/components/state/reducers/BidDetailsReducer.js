import { FETCH_BID_DETAILS_PENDING, FETCH_BID_DETAILS_FULFILLED, FETCH_BID_DETAILS_REJECTED } from '../actions/BidDetailsActions';

const initialState = {
    details: {},
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchBidDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BID_DETAILS_PENDING:
            return {
                ...state,
                details: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_BID_DETAILS_FULFILLED:
            return {
                ...state,
                details: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_BID_DETAILS_REJECTED:
            return {
                ...state,
                details: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
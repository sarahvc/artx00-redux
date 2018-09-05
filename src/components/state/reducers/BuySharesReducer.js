import {
    BUY_SHARES_PENDING,
    BUY_SHARES_FULFILLED,
    BUY_SHARES_REJECTED
} from '../actions/PlaceBidActions';
  
  
// INITIALIZE STATE

const initialState = {
    shares: '',
    fetching: false,
    fetched: false,
    failed: false
};
  
  
// REDUCER
  
export const PlaceBidReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_SHARES_PENDING:
            return {
                ...state,
                shares: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case BUY_SHARES_FULFILLED:
            return {
                ...state,
                shares: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case BUY_SHARES_REJECTED:
            return {
                ...state,
                shares: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
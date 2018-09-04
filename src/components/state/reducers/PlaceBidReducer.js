import {
    PLACE_BID_PENDING,
    PLACE_BID_FULFILLED,
    PLACE_BID_REJECTED
} from '../actions/PlaceBidActions';
  
  
// INITIALIZE STATE

const initialState = {
    bid: '',
    fetching: false,
    fetched: false,
    failed: false
};
  
  
// REDUCER
  
export const PlaceBidReducer = (state = initialState, action) => {
    switch(action.type) {
        case PLACE_BID_PENDING:
            return {
                ...state,
                bid: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case PLACE_BID_FULFILLED:
            return {
                ...state,
                bid: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case PLACE_BID_REJECTED:
            return {
                ...state,
                bid: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
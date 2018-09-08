import {
    SUBSCRIBE_PENDING,
    SUBSCRIBE_FULFILLED,
    SUBSCRIBE_REJECTED
} from '../actions/SubscribeActions';
  
  
// INITIALIZE STATE

const initialState = {
    useremail: '',
    fetching: false,
    fetched: false,
    failed: false
};
  
  
// REDUCER
  
export const SubscribeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBSCRIBE_PENDING:
            return {
                ...state,
                useremail: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case SUBSCRIBE_FULFILLED:
            return {
                ...state,
                useremail: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case SUBSCRIBE_REJECTED:
            return {
                ...state,
                useremail: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
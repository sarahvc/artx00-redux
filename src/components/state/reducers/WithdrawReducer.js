import {
    WITHDRAW_PENDING,
    WITHDRAW_FULFILLED,
    WITHDRAW_REJECTED
} from '../actions/WithdrawActions';
  
  
// INITIALIZE STATE

const initialState = {
    transaction: '',
    fetching: false,
    fetched: false,
    failed: false
};

// REDUCER

export const WithdrawReducer = (state = initialState, action) => {
    switch(action.type) {
        case WITHDRAW_PENDING:
            return {
                ...state,
                transaction: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case WITHDRAW_FULFILLED:
            return {
                ...state,
                transaction: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case WITHDRAW_REJECTED:
            return {
                ...state,
                transaction: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
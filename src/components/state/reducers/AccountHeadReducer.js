import { FETCH_ACCOUNT_HEAD_PENDING, FETCH_ACCOUNT_HEAD_FULFILLED, FETCH_ACCOUNT_HEAD_REJECTED } from '../actions/AccountHeadActions';

const initialState = {
    head: {},
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchAccountHeadReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ACCOUNT_HEAD_PENDING:
            return {
                ...state,
                head: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_ACCOUNT_HEAD_FULFILLED:
            return {
                ...state,
                head: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_ACCOUNT_HEAD_REJECTED:
            return {
                ...state,
                head: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
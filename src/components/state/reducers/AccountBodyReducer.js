import { FETCH_ACCOUNT_BODY_PENDING, FETCH_ACCOUNT_BODY_FULFILLED, FETCH_ACCOUNT_BODY_REJECTED } from '../actions/AccountBodyActions';

const initialState = {
    body: [],
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchAccountBodyReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ACCOUNT_BODY_PENDING:
            return {
                ...state,
                body: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_ACCOUNT_BODY_FULFILLED:
            return {
                ...state,
                body: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_ACCOUNT_BODY_REJECTED:
            return {
                ...state,
                body: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
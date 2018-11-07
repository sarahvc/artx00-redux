import { FETCH_REFER_LINK_PENDING, FETCH_REFER_LINK_FULFILLED, FETCH_REFER_LINK_REJECTED } from '../actions/ReferLinkActions';

const initialState = {
    rfcode: '',
    fetching: false,
    fetched: false,
    failed: false
};

export const FetchReferLinkReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_REFER_LINK_PENDING:
            return {
                ...state,
                rfcode: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_REFER_LINK_FULFILLED:
            return {
                ...state,
                rfcode: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_REFER_LINK_REJECTED:
            return {
                ...state,
                rfcode: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
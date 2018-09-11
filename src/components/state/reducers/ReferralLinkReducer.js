import {
    VALICATE_REFERRAL_PENDING,
    VALICATE_REFERRAL_FULFILLED,
    VALICATE_REFERRAL_REJECTED
} from '../actions/ReferralLinkActions';
  
  
// INITIALIZE STATE

const initialState = {
    referurl: '',
    fetching: false,
    fetched: false,
    failed: false
};
  
  
// REDUCER
  
export const SubscribeReducer = (state = initialState, action) => {
    switch(action.type) {
        case VALICATE_REFERRAL_PENDING:
            return {
                ...state,
                referurl: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case VALICATE_REFERRAL_FULFILLED:
            return {
                ...state,
                referurl: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case VALICATE_REFERRAL_REJECTED:
            return {
                ...state,
                referurl: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
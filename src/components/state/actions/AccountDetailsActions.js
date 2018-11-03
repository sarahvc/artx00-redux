import { getAccountDetails } from '../../../services/AccountDetailsService';

export const FETCH_ACCOUNT_DETAILS = 'FETCH_ACCOUNT_DETAILS';
export const FETCH_ACCOUNT_DETAILS_PENDING = 'FETCH_ACCOUNT_DETAILS_PENDING';
export const FETCH_ACCOUNT_DETAILS_FULFILLED = 'FETCH_ACCOUNT_DETAILS_FULFILLED';
export const FETCH_ACCOUNT_DETAILS_REJECTED = 'FETCH_ACCOUNT_DETAILS_REJECTED';

// ACTION GENERATORS

const fetchAccountDetailsAction = (account) => ({
    type: FETCH_ACCOUNT_DETAILS,
    payload: getAccountDetails(account)
});


// EXPORT ACTIONS

export { fetchAccountDetailsAction as fetchAccountDetails };
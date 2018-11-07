import { getAccountBody } from '../../../services/AccountBodyService';

export const FETCH_ACCOUNT_BODY = 'FETCH_ACCOUNT_BODY';
export const FETCH_ACCOUNT_BODY_PENDING = 'FETCH_ACCOUNT_BODY_PENDING';
export const FETCH_ACCOUNT_BODY_FULFILLED = 'FETCH_ACCOUNT_BODY_FULFILLED';
export const FETCH_ACCOUNT_BODY_REJECTED = 'FETCH_ACCOUNT_BODY_REJECTED';

// ACTION GENERATORS

const fetchAccountBodyAction = () => ({
    type: FETCH_ACCOUNT_BODY,
    payload: getAccountBody()
});


// EXPORT ACTIONS

export { fetchAccountBodyAction as fetchAccountBody };
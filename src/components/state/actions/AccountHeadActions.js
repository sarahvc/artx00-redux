import { getAccountHead } from '../../../services/AccountHeadService';

export const FETCH_ACCOUNT_HEAD = 'FETCH_ACCOUNT_HEAD';
export const FETCH_ACCOUNT_HEAD_PENDING = 'FETCH_ACCOUNT_HEAD_PENDING';
export const FETCH_ACCOUNT_HEAD_FULFILLED = 'FETCH_ACCOUNT_HEAD_FULFILLED';
export const FETCH_ACCOUNT_HEAD_REJECTED = 'FETCH_ACCOUNT_HEAD_REJECTED';

// ACTION GENERATORS

const fetchAccountHeadAction = () => ({
    type: FETCH_ACCOUNT_HEAD,
    payload: getAccountHead()
});


// EXPORT ACTIONS

export { fetchAccountHeadAction as fetchAccountHead };
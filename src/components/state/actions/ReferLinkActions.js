import { getReferLink } from '../../../services/ReferLinkService';

export const FETCH_REFER_LINK = 'FETCH_REFER_LINK';
export const FETCH_REFER_LINK_PENDING = 'FETCH_REFER_LINK_PENDING';
export const FETCH_REFER_LINK_FULFILLED = 'FETCH_REFER_LINK_FULFILLED';
export const FETCH_REFER_LINK_REJECTED = 'FETCH_REFER_LINK_REJECTED';

// ACTION GENERATORS

const fetchReferLinkAction = () => ({
    type: FETCH_REFER_LINK,
    payload: getReferLink()
});


// EXPORT ACTIONS

export { fetchReferLinkAction as fetchReferLink };
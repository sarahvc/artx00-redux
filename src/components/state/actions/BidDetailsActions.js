import { getBidDetails } from '../../../services/BidDetailsService';

export const FETCH_BID_DETAILS = 'FETCH_BID_DETAILS';
export const FETCH_BID_DETAILS_PENDING = 'FETCH_BID_DETAILS_PENDING';
export const FETCH_BID_DETAILS_FULFILLED = 'FETCH_BID_DETAILS_FULFILLED';
export const FETCH_BID_DETAILS_REJECTED = 'FETCH_BID_DETAILS_REJECTED';

// ACTION GENERATORS

const fetchBidDetailsAction = () => ({
    type: FETCH_BID_DETAILS,
    payload: getBidDetails()
});


// EXPORT ACTIONS

export { fetchBidDetailsAction as fetchBidDetails };
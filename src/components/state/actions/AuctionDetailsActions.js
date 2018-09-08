import { getAuctionDetails } from '../../../services/AuctionDetailsService';

export const FETCH_AUCTION_DETAILS = 'FETCH_AUCTION_DETAILS';
export const FETCH_AUCTION_DETAILS_PENDING = 'FETCH_AUCTION_DETAILS_PENDING';
export const FETCH_AUCTION_DETAILS_FULFILLED = 'FETCH_AUCTION_DETAILS_FULFILLED';
export const FETCH_AUCTION_DETAILS_REJECTED = 'FETCH_AUCTION_DETAILS_REJECTED';

// ACTION GENERATORS

const fetchAuctionDetailsAction = () => ({
    type: FETCH_AUCTION_DETAILS,
    payload: getAuctionDetails()
});


// EXPORT ACTIONS

export { fetchAuctionDetailsAction as fetchAuctionDetails };
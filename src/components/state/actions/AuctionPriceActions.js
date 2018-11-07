import { getAuctionPrice } from '../../../services/AuctionPriceService';

export const FETCH_PRICE = 'FETCH_PRICE';
export const FETCH_PRICE_PENDING = 'FETCH_PRICE_PENDING';
export const FETCH_PRICE_FULFILLED = 'FETCH_PRICE_FULFILLED';
export const FETCH_PRICE_REJECTED = 'FETCH_PRICE_REJECTED';

// ACTION GENERATORS

const fetchAuctionPriceAction = () => ({
    type: FETCH_PRICE,
    payload: getAuctionPrice()
});


// EXPORT ACTIONS

export { fetchAuctionPriceAction as fetchAuctionPrice };
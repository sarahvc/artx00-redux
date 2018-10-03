import { getAuctionPrice } from '../../../services/AuctionPriceService';

export const FETCH_AUCTION_PRICE = 'FETCH_AUCTION_PRICE';
export const FETCH_AUCTION_PRICE_PENDING = 'FETCH_AUCTION_PRICE_PENDING';
export const FETCH_AUCTION_PRICE_FULFILLED = 'FETCH_AUCTION_PRICE_FULFILLED';
export const FETCH_AUCTION_PRICE_REJECTED = 'FETCH_AUCTION_PRICE_REJECTED';

// ACTION GENERATORS

const fetchAuctionPriceAction = () => ({
    type: FETCH_AUCTION_PRICE,
    payload: getAuctionPrice()
});


// EXPORT ACTIONS

export { fetchAuctionPriceAction as fetchAuctionPrice };
import { placeBid } from '../../../services/PlaceBidService';

export const PLACE_BID = 'PLACE_BID';
export const PLACE_BID_PENDING = 'PLACE_BID_PENDING';
export const PLACE_BID_FULFILLED = 'PLACE_BID_FULFILLED';
export const PLACE_BID_REJECTED = 'PLACE_BID_REJECTED';

const placeBidAction = (bid) => ({
    type: PLACE_BID,
    payload: placeBid(bid)
});

// EXPORT ACTIONS

export { placeBidAction as placeBid };
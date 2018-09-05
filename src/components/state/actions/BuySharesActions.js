import { buyShares } from '../../../services/BuySharesService';

export const BUY_SHARES = 'BUY_SHARES';
export const BUY_SHARES_PENDING = 'BUY_SHARES_PENDING';
export const BUY_SHARES_FULFILLED = 'BUY_SHARES_FULFILLED';
export const BUY_SHARES_REJECTED = 'BUY_SHARES_REJECTED';

const buySharesAction = (shares) => ({
    type: BUY_SHARES,
    payload: buyShares(shares)
});

// EXPORT ACTIONS

export { buySharesAction as buyShares };
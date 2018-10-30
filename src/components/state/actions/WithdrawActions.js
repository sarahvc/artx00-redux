import { withdraw } from '../../../services/WithdrawService';

export const WITHDRAW = 'WITHDRAW';
export const WITHDRAW_PENDING = 'WITHDRAW_PENDING';
export const WITHDRAW_FULFILLED = 'WITHDRAW_FULFILLED';
export const WITHDRAW_REJECTED = 'WITHDRAW_REJECTED';

const withdrawAction = () => ({
    type: WITHDRAW,
    payload: withdraw()
});

// EXPORT ACTIONS

export { withdrawAction as withdrawToWallet };
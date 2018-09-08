import { subsribe } from '../../../services/SubscribeService';

export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_PENDING = 'SUBSCRIBE_PENDING';
export const SUBSCRIBE_FULFILLED = 'SUBSCRIBE_FULFILLED';
export const SUBSCRIBE_REJECTED = 'SUBSCRIBE_REJECTED';

const subsribeAction = (email) => ({
    type: SUBSCRIBE,
    payload: subsribe(email)
});

// EXPORT ACTIONS

export { subsribeAction as subsribe };
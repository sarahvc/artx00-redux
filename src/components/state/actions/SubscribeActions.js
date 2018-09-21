import { subscribeToARTX } from '../../../services/SubscribeService';

export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_PENDING = 'SUBSCRIBE_PENDING';
export const SUBSCRIBE_FULFILLED = 'SUBSCRIBE_FULFILLED';
export const SUBSCRIBE_REJECTED = 'SUBSCRIBE_REJECTED';

const subscribeAction = (email) => ({
    type: SUBSCRIBE,
    payload: subscribeToARTX(email)
});

// EXPORT ACTIONS

export { subscribeAction as subscribeToARTX };
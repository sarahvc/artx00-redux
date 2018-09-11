import { validateReferral } from '../../../services/ReferralLinkService';

export const VALICATE_REFERRAL = 'VALICATE_REFERRAL';
export const VALICATE_REFERRAL_PENDING = 'VALICATE_REFERRAL_PENDING';
export const VALICATE_REFERRAL_FULFILLED = 'VALICATE_REFERRAL_FULFILLED';
export const VALICATE_REFERRAL_REJECTED = 'VALICATE_REFERRAL_REJECTED';

const validateReferralAction = (url) => ({
    type: VALICATE_REFERRAL,
    payload: validateReferral(url)
});

// EXPORT ACTIONS

export { validateReferralAction as validateReferral };
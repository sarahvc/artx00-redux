import { changeUserName } from '../../../services/ChangeUserNameService';

export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';
export const CHANGE_USER_NAME_PENDING = 'CHANGE_USER_NAME_PENDING';
export const CHANGE_USER_NAME_FULFILLED = 'CHANGE_USER_NAME_FULFILLED';
export const CHANGE_USER_NAME_REJECTED = 'CHANGE_USER_NAME_REJECTED';

const changeUserNameAction = (username) => ({
    type: CHANGE_USER_NAME,
    payload: changeUserName(username)
});

// EXPORT ACTIONS

export { changeUserNameAction as changeUserName };
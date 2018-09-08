import {
    CHANGE_USER_NAME_PENDING,
    CHANGE_USER_NAME_FULFILLED,
    CHANGE_USER_NAME_REJECTED
} from '../actions/ChangeUserNameActions';
  
  
// INITIALIZE STATE

const initialState = {
    username: '',
    fetching: false,
    fetched: false,
    failed: false
};
  
  
// REDUCER
  
export const ChangeUserNameReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_USER_NAME_PENDING:
            return {
                ...state,
                username: '',
                fetching: true,
                fetched: false,
                failed: false
            };
        case CHANGE_USER_NAME_FULFILLED:
            return {
                ...state,
                username: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case CHANGE_USER_NAME_REJECTED:
            return {
                ...state,
                username: '',
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};
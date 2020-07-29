import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_ACCOUNT, } from '../actions/session';

export default (state = [], action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_ACCOUNT:
            return [];
        default:
            return state;
    }
};
import { } from '../actions/list';

export default (state = [], action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_ACCOUNT:
            return [];
        case CLEAR_ERRORS:
            action.errors = [];
            return action.errors
        default:
            return state;
    }
};
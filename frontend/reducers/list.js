import { RECEIVE_LIST, REMOVE_LIST } from '../actions/list';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIST:
            return Object.assign({}, state,  Object.values(action.list) );
        case REMOVE_LIST:
            let newState = {}
            return Object.assign({}, newState,  Object.values(action.list) );
        default:
            return state;
    }
};

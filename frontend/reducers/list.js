import { RECEIVE_CURRENT_LIST } from '../actions/category';

export default (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_LIST:
            return Object.assign({}, state, action.list );
        case RECEIVE_LIST:
            return Object.assign({}, state, action.list );
        default:
            return state;
    }
};

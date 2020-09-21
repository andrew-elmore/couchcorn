import { RECEIVE_CATEGORIES } from '../actions/category';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, action.categories );
        default:
            return state;
    }
};

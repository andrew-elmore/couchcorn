import { RECEIVE_LIST } from '../actions/list';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIST:
            return Object.assign({}, state,  Object.values(action.list.videos) );
        default:
            return state;
    }
};

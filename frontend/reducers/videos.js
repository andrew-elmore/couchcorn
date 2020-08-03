import { RECEIVE_VIDEO } from '../actions/video';




export default (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video });
        default:
            return state;
    }
};

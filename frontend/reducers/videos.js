import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video';




export default (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video });
        case RECEIVE_VIDEOS:
            return Object.assign({}, state, action.videos );
        default:
            return state;
    }
};

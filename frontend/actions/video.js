import * as utilVideo from '../util/videos'


export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});


export const fetchVideo = videoId => dispatch => {
    
    return(
    utilVideo.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video))))}




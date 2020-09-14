import * as utilVideo from '../util/videos'


export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos,
});


export const fetchVideo = videoId => dispatch => {
    return(
    utilVideo.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
    )
}
export const fetchVideos = () => dispatch => {
    return(
    utilVideo.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
    )
}




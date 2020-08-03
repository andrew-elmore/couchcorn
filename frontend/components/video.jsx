import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/video';



class Video extends React.Component {

    
    componentDidMount() {
        debugger
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        const { video } = this.props;
        if (video === undefined){
            return (null)
        }
        return (
            <div className="videoplayer">
                <h1>{video.title}</h1>
                <video src={video.videourl} controls></video>
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    debugger
    return ({
    video: state.videos[ownProps.match.params.videoId]
})};

const mdtp = (dispatch) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
})

export default connect(mstp, mdtp)(Video)
import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../actions/video';



class Video extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); 
    }
    
    componentDidMount() {
        
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const { video } = this.props;
        if (video === undefined){
            return (null)
        }
        return (
            <div className="videoplayer">
                <h1>
                    <button onClick={this.goBack}>⇐</button>
                    {video.title}
                </h1>
                <video src={video.videourl} controls></video>
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
    video: state.videos[ownProps.match.params.videoId]
})};

const mdtp = (dispatch) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
})

export default connect(mstp, mdtp)(Video)
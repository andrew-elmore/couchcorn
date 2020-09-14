import React from 'react';
import { connect } from 'react-redux';
import VideoThumbnail from './videothumbnail';
import { fetchVideos } from '../actions/video';

class Search extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos()
    }

    render () {
        
        return (
            <div>
                <ul>
                    {this.props.videos.map(video =>
                        <VideoThumbnail video={video} />
                    )}
                </ul>
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
        videos: Object.values(state.videos)
    })
};

const mdtp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
})

export default connect(mstp, mdtp)(Search)
import React from 'react';
import { connect } from 'react-redux';
import VideoThumbnail from './videothumbnail';
import { fetchVideos } from '../actions/video';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchValue: props.location.search.replace('%20', ' '),
        }

        this.renderVideos = this.renderVideos.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.location.search !== prevState.searchValue) {
            return { searchValue: nextProps.location.search.replace('%20', ' ') };
        }
        else {
            return null;
        }
    }

    componentDidMount() {
        this.props.fetchVideos()
    }

    renderVideos() {
        let videos = []
        let searchValue = this.state.searchValue
        if (this.props.videos.length != 0) {
            this.props.videos.forEach(video => {
                if (video.title.slice(0, searchValue.length - 1).toLowerCase() === searchValue.slice(1, searchValue.length).toLowerCase()){
                    videos.push(video)
            }
        })
        let account_id = this.props.account_id
        return(
            videos.map(video =>
                <li key={video.id}>
                    <VideoThumbnail video={video} account_id={account_id}/>
                </li>
                )
                )
            } else {
                return (<p>Finding Videos</p>)
            }
        }
        
        render () {
            
            
            return (
            <div className="searchzone">
                <ul>
                    {this.renderVideos()}
                </ul>
            </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
        account_id: state.session.currentAccount.id,
        videos: Object.values(state.videos)
    })
};

const mdtp = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
})

export default connect(mstp, mdtp)(Search)
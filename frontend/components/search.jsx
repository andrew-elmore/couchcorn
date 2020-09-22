import React from 'react';
import { connect } from 'react-redux';
import VideoThumbnail from './videothumbnail';
import { fetchList, createListItem, deleteListItem } from '../actions/list';
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
        this.props.fetchList(this.props.account_id)
    }

    renderVideos() {
        let videos = []
        let searchValue = this.state.searchValue
        let idList = this.props.list.map(video => video.id)
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
                        <VideoThumbnail video={video} account_id={account_id} idList={idList} />
                    </li>
                
                )
                )
            } else {
                return (<p>Finding Videos</p>)
            }
        }
        
        render () {
            
            
            return (
                <div className='render-video-tiles'>
                    <div className='render-zone'>
                        <ul>
                            {this.renderVideos()}
                        </ul>
                    </div>
                </div>
        )
    }
}


const mstp = (state, ownProps) => {
    return ({
        list: Object.values(state.list),
        account_id: state.session.currentAccount.id,
        videos: Object.values(state.videos)
    })
};

const mdtp = (dispatch) => ({
    fetchList: account_id => dispatch(fetchList(account_id)),
    fetchVideos: () => dispatch(fetchVideos()),
})

export default connect(mstp, mdtp)(Search)

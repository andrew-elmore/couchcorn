import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../actions/list';
import VideoThumbnail from './videothumbnail';


class myList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            video: []
        }
        this.renderVideos = this.renderVideos.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchList(this.props.account_id)
    }

    renderVideos(){
        let videos = []
        if (this.props.list.length === 0){
            return(
                <div>Finding Videos</div>
            )
        }else{  
            videos = this.props.list
            let account_id = this.props.account_id
            return (
                videos.map(video =>
                    <li key={video.id}>
                        <VideoThumbnail video={video} account_id={account_id} />
                    </li>
                )
            )
        }
    } 

    render(){

        return (
            <div className='myList'>
                {this.renderVideos()}
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return ({
        account_id: state.session.currentAccount.id,
        list: Object.values(state.list)
    })
};


const mdtp = (dispatch) => {
    return({
        fetchList: account_id => dispatch(fetchList(account_id)),
    })
}

export default connect(mstp, mdtp)(myList)

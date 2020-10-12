import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList, createListItem, deleteListItem } from '../actions/list';
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
        let idList = this.props.list.map(video => video.id)
        let videos = []
        if (this.props.list.length === 0){
            return(
                <div>No Videos Saved To List</div>
            )
        }else{  
            videos = this.props.list
            let account_id = this.props.account_id
            return (
                videos.map(video =>
                    <ul>
                        <li key={video.id}>
                            <VideoThumbnail
                                video={video}
                                account_id={account_id}
                                idList={idList}
                                list={this.props.list}
                                createListItem={this.props.createListItem}
                                deleteListItem={this.props.deleteListItem}
                            />
                        </li>
                    </ul>
                )
            )
        }
    } 

    render(){

        return (
            <div className='render-video-tiles'>
                <div className='render-zone'>
                    {this.renderVideos()}
                </div>
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
        createListItem: listData => dispatch(createListItem(listData)),
        deleteListItem: (listData) => dispatch(deleteListItem(listData)),
        fetchList: account_id => dispatch(fetchList(account_id)),
    })
}

export default connect(mstp, mdtp)(myList)



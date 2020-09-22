import React from 'react';
import { Link } from 'react-router-dom';

function createListItem(video_id, account_id){
    let list = { video_id: video_id, account_id: account_id }
    $.ajax({
        url: '/api/lists',
        method: 'POST',
        data: { list }
    });
}

function deleteListItem(video_id, account_id){
    let list = { video_id: video_id, account_id: account_id }
    $.ajax({
        url: '/api/lists',
        method: 'DELETE',
        data: { list }
    });
}



export const VideoThumbnail = props => {
    debugger
    let onList = props.idList.includes(props.video.id)
        if(onList){
            return (
                <div className='video-thumbnail'>
                    <div className="button">
                        <button onClick={() => deleteListItem(props.video.id, props.account_id)}>-</button>
                    </div>
                    <Link to={`/videos/${props.video.id}`}>
                        <p>{props.video.title}</p>
                        <img src={props.video.thumbnailurl} />
                    </Link>
                </div>
            )
        }else{
        return (
            <div className='video-thumbnail'>
                <div className="button">
                    <button onClick={() => createListItem(props.video.id, props.account_id)}>+</button>
                </div>
                <Link to={`/videos/${props.video.id}`}>
                    <p>{props.video.title}</p>
                    <img src={props.video.thumbnailurl}/>
                </Link>
            </div>
        )
    }
}


export default VideoThumbnail

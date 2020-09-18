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


export const VideoThumbnail = props => {
    // let account_id = 
    return (
        <div className='video'>
            <Link to={`/videos/${props.video.id}`}>
                <p>{props.video.title}</p>
                {/* <img src={props.video.thumbnailurl}/> */}
            </Link>
                <button onClick={() => createListItem(props.video.id, props.account_id)}>+</button>
        </div>
    )
}


export default VideoThumbnail

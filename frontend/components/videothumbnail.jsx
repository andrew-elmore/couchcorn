import React from 'react';
import { Link } from 'react-router-dom';





export const VideoThumbnail = props => {
    let onList = props.idList.includes(props.video.id)
        if(onList){
            return (
                <div className='video-thumbnail'>
                    <div className="button">
                        <button onClick={() => props.deleteListItem({ video_id: props.video.id, account_id: props.account_id })}>-</button>
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
                    <button onClick={() => props.createListItem({video_id: props.video.id, account_id: props.account_id})}>+</button>
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
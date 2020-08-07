import React from 'react';
import { Link } from 'react-router-dom';


const VideoThumbnail = props => {
    return (
        <div className='video'>
            <Link to={`/videos/${props.video.id}`}>
                <p>{props.video.title}</p>
                <img src={props.video.thumbnailurl}/>
            </Link>
        </div>
    )
}


export default VideoThumbnail
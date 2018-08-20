import React from 'react';

const VideoDetail = ({title, overview, youtubeKey}) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default VideoDetail;
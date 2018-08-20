import React from 'react'

const BASE_URL = "https://www.youtube.com/embed/";


const Video = ({youtubeKey}) => {

    return (
        <div>
            <iframe width="425" height="349" src={`${BASE_URL}${youtubeKey}`} frameBorder="0"  allow="autoplay" encrypted-media allowFullScreen></iframe> 
        </div>
    )
}

export default Video;
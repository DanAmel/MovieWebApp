import React from 'react'

const VideoListItem = ({movie}) =>{

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
    return(
        <div>
            <li> 
                <img height="100px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                <h3>{movie.title}</h3> 
            </li>
        </div>
    )
     
}


export default VideoListItem;
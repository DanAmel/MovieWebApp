import React from 'react'
import VideoListItem from '../components/video-list-item';


const VideoList = ({moviesList}) =>{
   // console.log("", moviesList);
   
    if(moviesList.length >= 5)
    {
        return (
            <div>
            <ul>
                {
                    moviesList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} />
                    })
                }
    
            </ul>
            </div>
        );
    }
    else{
        return <div></div>;
    }
    
}

export default VideoList;
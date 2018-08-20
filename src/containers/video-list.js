import React from 'react'
import VideoListItem from '../components/video-list-item';


const VideoList = (props) =>{
   // console.log("", moviesList);
   const {moviesList} = props;
    if(moviesList.length >= 5)
    {
        return (
            <div>
            <ul>
                {
                    moviesList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack} />
                    })
                }
    
            </ul>
            </div>
        );
    }
    else{
        return <div></div>;
    }
    
    function receiveCallBack(movie){
        console.log("", movie);
    }

    
}

export default VideoList;
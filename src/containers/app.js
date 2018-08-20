import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from '../containers/video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import axios from 'axios'


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=9c121b442ed69bd2a5c5f769466c9c7c";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {moviesList:{}, currentMovie:{}};
    }


    componentWillMount(){
        this.initMovies();
    }

    render () {

        return ( 
            <div>
                <div className="search_bar">
                    <SearchBar /> 
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <Video youtubeKey={this.state.currentMovie.key} />
                        <VideoDetail title={this.state.currentMovie.title} overview={this.state.currentMovie.overview} />
                    </div>
                    <div className="col-md-4">
                        <VideoList moviesList={this.state.moviesList} />
                    </div>
                </div>
                
                
            </div>
        )
    };

    initMovies()
    {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            this.setState({moviesList:response.data.results.slice(1,6), currentMovie:response.data.results[0]});
            this.setState({currentMovie:response.data.results[0]}, function(){
                {this.applyVideoToCurrentMovie()}
            });
        }.bind(this));
    }



    applyVideoToCurrentMovie()
    {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos`).then(function(response){
           
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMoviState = this.state.currentMovie;
            newCurrentMoviState.key = youtubeKey;
            this.setState({currentMovie:newCurrentMoviState});
            console.log("",newCurrentMoviState);
        }.bind(this));
    }

}

export default App;
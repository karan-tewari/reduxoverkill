import React, { Component } from 'react';
import MovieNavbar from './MovieNavbar';

import MovieCard from '../components/moviesComponent/MovieCard';
import MovieModal from '../components/moviesComponent/MovieModal';
import MovieSearch from '../components/moviesComponent/MovieSearch';

import {apiKey} from '../config/omdb';
import Axios from 'axios';

class MovieContainer extends Component{

    state = {
        title : "",
        year : "",
        type: "",
        poster : ""
    }

    componentDidMount(){
        Axios.get(`http://www.omdbapi.com/?s=batman&apikey=${apiKey}`).then(function(res){
            console.log(res);
        })
    }

    render(){
        

        return(
            <div>
                <MovieNavbar />
                <h1>Welcome to the movie container</h1>
                <div className="row">
                    <div className="container">
                        <div className="col-md-12">
                            <MovieSearch />
                            <div className="clearfix"></div>
                            <MovieCard />
                            <div className="clearfix"></div>
                            <MovieModal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieContainer;
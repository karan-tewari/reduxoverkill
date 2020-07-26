import React, { Component } from 'react';
import MovieNavbar from './MovieNavbar';

class MovieContainer extends Component{
    render(){
        return(
            <div>
                <MovieNavbar />
                <h1>This is my movie container</h1>
            </div>
        )
    }
}

export default MovieContainer;
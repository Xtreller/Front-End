import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }
    getMovie() {
        this.setState({ movie: this.props.data })
        console.log(this.state.movie);
    }
    render() {
        return (
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="https://p7.hiclipart.com/preview/637/987/686/movie-camera-photographic-film-cinema-clapperboard-others.jpg"  />
                        <h5>{this.props.data.title}</h5>
                        <p>{this.props.data.rating}</p>

                    </div>
                    <div class="flip-card-back">
                        <h1>{this.props.data.title}</h1>
                        <p>{this.props.data.rating}</p>
                        <p>We love that movie &#10084;</p>
                        <a href="/movies">Details</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie
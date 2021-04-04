import React, { Component } from "react";
import Comments from './Comments';
import Carousel from './Carousel';

import '../../style/MovieDetails.css'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }
    getMovie() {
        const movieid = this.props.match.params.movieid;
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ movie: res.movie }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getMovie()

    render() {
        let { title, image, actors, genre, description, producers, carouselImages } = this.state.movie;
        if (actors && genre) {
            actors = actors.join(', ');
            genre = genre.join(', ')
        }
        return (
            <div>

                <div className="details-container">
                    <div className="carousel">
                        <Carousel images={carouselImages}></Carousel>
                    </div>
                    <div className="movie-details">
                        <img id="front-cover"
                            src={image}
                            alt="Loading..." />
                        <div className="movie-info">
                            <h5>{title}</h5>
                            <ul >
                                {/* <li>&#11088; {this.state.movie.rating || 0} / 10</li> */}
                                <li className="li-info">Director/s: {producers}</li>
                                <li className="li-info">Actors: {actors}</li>
                                <li className="li-info">Genre: {genre}</li>
                            </ul>
                            <p id="movie-description">{description}</p>
                        </div>
                    </div>
                </div>
                <Comments movieid={this.props.match.params.movieid} ></Comments>
            </div>
        )
    }
}
export default Details

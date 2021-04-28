import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from './Comments';
import Carousel from './Carousel';

import '../../style/MovieDetails.css'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.addComment = this.addComment.bind(this);
        this.getMovie = this.getMovie.bind(this);
    }
    getMovie() {
        const movieid = this.props.match.params.movieid;
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ movie: res.movie }))
            .catch(err => console.log(err))
    }
    addComment(newComment) {
        const movieid = this.state.movie._id;

        if (!newComment) {
            return { err: 'Comment cant be empty!' }
        }
        else {
            console.log(newComment)
            fetch('http://localhost:5000/catalogue/movie/addComment/' + movieid, {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            })
                .then(() => this.getMovie())
                .catch(err => console.log(err));
        }
    }
    componentDidMount = () => this.getMovie();
    componentDidUpdate = (_, prevState) => {
        if (prevState.movie === this.state.movie) {
            this.getMovie();
        }
    }

    render() {
        let { title, image, actors, genre, description, producers, carouselImages, comments } = this.state.movie;
        if (actors && genre && comments) {
            actors = actors.join(', ');
            genre = genre.join(', ');
            comments.reverse();
        }

        return (
            <div>
                {localStorage.getItem('userRole') === 'admin' ? <span className="btn-secondary"><Link to={{ pathname: `/editMovie/${this.props.match.params.movieid}` }}>Edit Movie</Link></span> : ''}
                {localStorage.getItem('userRole') === 'admin' ? <span className="btn-secondary"><Link to={{ pathname: `/deleteMovie/${this.state.movie._id}` }}>Delete Movie</Link></span> : ''}

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
                <Comments movieid={this.props.match.params.movieid} comments={comments} addComment={this.addComment}></Comments>
            </div >
        )
    }
}
export default Details

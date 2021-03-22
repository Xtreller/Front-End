import React, { Component } from "react";
import '../../style/MovieDetails.css'
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }
    componentDidMount = () => this.getMovie()
    getMovie() {
        const movieid = this.props.match.params.movieid;
        console.log(movieid);
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ movie: res.movie }))
            .catch(err => console.log(err))
    }
    render() {
        const { title, image, description, producers, imageCarousel
        } = this.state.movie;
        console.log(this.state.movie)
        return (
            <div className="details-container">
                <div className="carousel">
                    {imageCarousel}
                </div>
                <div className="movie-details">
                    <img id="front-cover"
                        src={image}
                        alt="Loading..." />
                    <div className="movie-info">
                        <h5>{title}</h5>
                        <ul >
                            <li>&#11088; {this.state.movie.rating || 0} / 10</li>
                            <li>Director/s: {producers}</li>
                            
                        </ul>
                        <p id="description">{description}</p>
                    </div>
                </div>
            </div>)
    }
}
export default Details

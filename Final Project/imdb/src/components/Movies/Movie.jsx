import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
    }
    
    render() {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img
                            src={this.props.movie.image}
                            alt="Loading..." />
                        <h5>{this.props.movie.title}</h5>
                        <p>{this.props.movie.rating}</p>
                        <button id="card-btn"><Link  to={{pathname: `/Details/${this.props.movie._id}`}} >Details</Link></button>
                    </div>
                    {/* <div className="flip-card-back">
                        <h1>{this.props.movie.title}</h1>
                        <p>{this.props.movie.rating}</p>
                        <p>We love that movie &#10084;</p>
                        <a href="/movies">Details</a>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Movie
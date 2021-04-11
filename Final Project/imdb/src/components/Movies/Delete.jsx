import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    getMovie() {
        const movieid = this.props.id
        console.log(movieid)
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ movie: res.movie }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getMovie()
    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:5000/catalogue/movie/delete/' + this.state.movie._id, {
            method: 'POST'
        })
            .then(this.props.history.push('/movies'))
            .catch(err => console.log(err))

    }
    render() {
        console.log(this.state.movie)
        return (
            <div className='deletePage'>
                <img src={this.state.movie.image} alt="Loading..." />
                <div>
                    <h2>Title: {this.state.movie.title}</h2>
                    <h2>Comments: {this.state.movie.comments ? this.state.movie.comments.length : ''}</h2>
                    <button  onClick={(e) => this.handleSubmit(e)}>Delete This Movie</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Delete);
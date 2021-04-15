import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'

const Delete = props => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        getMovie();
    }, [])
    const getMovie = () => {
        const movieid = props.match.params.movieid;
        console.log(props)
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => setMovie(res.movie))
            .catch(err => console.log(err))
    }
    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:5000/catalogue/movie/delete/' + movie._id, {
            method: 'POST'
        })
            .then(props.history.push('/movies'))
            .catch(err => console.log(err))

    }
    return (
        <div className='deletePage'>
            <img src={movie.image} alt="Loading..." />
            <div>
                <h2>Title: {movie.title}</h2>
                <h2>Comments: {movie.comments ? movie.comments.length : ''}</h2>
                <button onClick={(e) => handleSubmit(e)}>Delete This Movie</button>
            </div>
        </div>
    );
}

export default withRouter(Delete);
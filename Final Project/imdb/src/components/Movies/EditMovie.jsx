import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Validate from '../../services/validation';

const EditMovie = (props) => {
    const [movie, setMovie] = useState({});
    const [err, setError] = useState([]);
    
    // const [movie, updated] = useFetch('http://localhost:5000/catalogue/movies/');
    useEffect(() => {
        fetch('http://localhost:5000/catalogue/movies/' + props.id)
            .then(data => data.json())
            .then(res => { setMovie(res.movie); setUpdated(res.movie) })
            .catch(err => console.log(err))
    }, [])
    const [updated, setUpdated] = useState(movie);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError(prev => prev = [Validate.FormIsNotEmpty(updated)]);

        console.log(err);

        if (updated !== movie) {
            fetch('http://localhost:5000/catalogue/edit/' + props.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updated),
            })
                .then(props.history.push('/Details/' + props.id))
                .catch(err => console.log(err))
        }
    }
    return (
        <form >
            <h1>Edit Movie</h1>
            <div className="form-group" >
                <label htmlFor="title">Title</label><br />
                <input data-name="title" onChange={e => setUpdated(prev => ({ ...prev, title: e.target.value }))} type="text" className="form-control" id="title" aria-describedby="titlelHelp" defaultValue={movie.title} />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="imageFrontCover">Front Cover</label><br />
                <input data-name="image" onChange={e => setUpdated(prev => ({ ...prev, image: e.target.value }))} type="text" className="form-control" id="imageFrontCover" defaultValue={movie.image} />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="carouselImages">Carousel</label><br />
                <input data-name="carouselImages" onChange={e => setUpdated(prev => ({ ...prev, carouselImages: e.target.value }))} type="text" className="form-control" id="imageCarousel" defaultValue={movie.carouselImages ? movie.carouselImages.join(', ') : ''} />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="genre">Genre</label><br />
                <input data-name="genre" onChange={e => setUpdated(prev => ({ ...prev, genre: e.target.value }))} type="text" className="form-control" id="imageCarousel" defaultValue={movie.genre ? movie.genre.join(', ') : ""} />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="producer">Producer/s</label><br />
                <input data-name="producers" onChange={e => setUpdated(prev => ({ ...prev, producers: e.target.value }))} type="text" className="form-control" id="producers" defaultValue={movie.producers} />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="actors">Actors</label><br />
                <textarea data-name="actors" onChange={e => setUpdated(prev => ({ ...prev, actors: e.target.value }))} type="text" className="form-control" id="actors" defaultValue={movie.actors} ></textarea>
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="description">Description</label><br />
                <textarea data-name="description" onChange={e => setMovie(prev => ({ ...prev, description: e.target.value }))} type="text" className="form-control" id="description" defaultValue={movie.description} ></textarea>
            </div>
            <button onClick={e => handleSubmit(e)} type="button" className="btn-submit">Submit Changes</button>

        </form>
    )
}
export default withRouter(EditMovie)
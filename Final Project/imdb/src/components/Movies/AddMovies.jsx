import { useState } from 'react';
import { withRouter } from 'react-router-dom'

const AddMovie = props => {

    const [movie, setMovie] = useState({});
    const [err, setError] = useState([]);
    const handleChange = e => {
        const arrayFields = ["carouselImages", "actors", "genre"]
        const field = e.target.dataset.name || e.target.name;
        const value = e.target.value;
        const newMovie = {};
        newMovie[field] = value;
        if (arrayFields.includes(field)) {
            newMovie[field] = value.trim().split(', ');
        }
        setMovie(prev => Object.assign(prev, newMovie))
    }
    const handleSubmit = e => {
        e.preventDefault();
        const { title, image, carouselImages, genre, producers, actors, description } = movie;
        console.log(movie)
        if (!title || !image || !carouselImages || !genre || !producers || !actors || !description) {
            setError(prev =>['Fields cannot be empty!'])
            console.log(err)
            return;
        }
        fetch('http://localhost:5000/catalogue/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (!res.success) {
                    setError(prev => prev.err = res.message)
                    return;
                }
                props.history.push('/movies')
            }

            )
            .then(console.log())
    }

    return (
        <form >
            <h1>Add Movie</h1>
            {err ?
                err.map((m, idx) =>
                    <label key={idx} className='err' htmlFor="comment-input">{m}</label>) : ''}
            <div className="form-group" >
                <label htmlFor="title">Title</label><br />
                <input data-name="title" onChange={e => handleChange(e)} type="text" className="form-control" id="title" aria-describedby="titlelHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="imageFrontCover">Front Cover</label><br />
                <input data-name="image" onChange={e => handleChange(e)} type="text" className="form-control" id="imageFrontCover" aria-describedby="imageFrontCoverHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="carouselImages">Carousel</label><br />
                <input data-name="carouselImages" onChange={e => handleChange(e)} type="text" className="form-control" id="imageCarousel" aria-describedby="imageCarouselHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="genre">Genre</label><br />
                <input data-name="genre" onChange={e => handleChange(e)} type="text" className="form-control" id="imageCarousel" aria-describedby="imageCarouselHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="producer">Producer/s</label><br />
                <textarea data-name="producers" onChange={e => handleChange(e)} type="text" className="form-control" id="producers" aria-describedby="produecersHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="description">Description</label><br />
                <textarea name="description" onChange={e => handleChange(e)} type="text" className="form-control" id="description" aria-describedby="descriptionHelp" />
            </div>
            <br />
            <div className="form-group" >
                <label htmlFor="actors">Actors</label><br />
                <textarea data-name="actors" onChange={e => handleChange(e)} type="text" className="form-control" id="producers" aria-describedby="produecersHelp" />
            </div>
            <br />

            <br />
            <button onClick={e => handleSubmit(e)} type="button" className="btn-submit">Submit Movie</button>

        </form>
    )

}
export default withRouter(AddMovie)
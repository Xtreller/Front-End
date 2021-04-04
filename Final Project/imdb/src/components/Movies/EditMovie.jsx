import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class EditMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updated: false,
            movie: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getMovie() {
        const movieid = this.props.match.params.movieid;
        fetch('http://localhost:5000/catalogue/movies/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ movie: res.movie }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getMovie()
    handleChange(e) {
        const arrayFields = ["carouselImages", "actors", "genre"]
        const field = e.target.dataset.name || e.target.name;
        const value = e.target.value;
        const newMovie = {};
        newMovie[field] = value;
        if (arrayFields.includes(field)) {
            newMovie[field] = value.split(', ');
        }
        this.setState({
            movie: Object.assign(this.state.movie, newMovie)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const movieid = this.props.match.params.movieid;

        if (this.state.updated) {

            fetch('http://localhost:5000/catalogue/edit/' + movieid, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.movie),
            })
                .then(res => res.json())
                .then(
                    this.props.history.push('/Details/' + movieid)

                )
                .catch(err => console.log(err))
        }
    }
    componentDidUpdate(_, prevState) {
        if (prevState.movie !== this.state.movie) {
            this.setState({ updated: true })
        }
    }

    render() {
        console.log(this.state.movie.description)

        return (
            <form >
                <h1>Edit Movie</h1>
                <div className="form-group" >
                    <label htmlFor="title">Title</label><br />
                    <input data-name="title" onChange={this.handleChange} type="text" className="form-control" id="title" aria-describedby="titlelHelp" value={this.state.movie.title} />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageFrontCover">Front Cover</label><br />
                    <input data-name="image" onChange={this.handleChange} type="text" className="form-control" id="imageFrontCover" value={this.state.movie.image} />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="carouselImages">Carousel</label><br />
                    <input data-name="carouselImages" onChange={this.handleChange} type="text" className="form-control" id="imageCarousel" value={this.state.movie.carouselImages ? this.state.movie.carouselImages.join(', ') : 'Loading...'} />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="genre">Genre</label><br />
                    <input data-name="genre" onChange={this.handleChange} type="text" className="form-control" id="imageCarousel" value={this.state.movie.genre ? this.state.movie.genre.join(', ') : "Loading..."} />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="producer">Producer/s</label><br />
                    <input data-name="producers" onChange={this.handleChange} type="text" className="form-control" id="producers" defaultValue={this.state.movie.producers} />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="actors">Actors</label><br />
                    <textarea data-name="actors" onChange={this.handleChange} type="text" className="form-control" id="actors" defaultValue={this.state.movie.actors} ></textarea>
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="description">Description</label><br />
                    <textarea data-name="description" onChange={this.handleChange} type="text" className="form-control" id="description" defaultValue={this.state.movie.description} ></textarea>
                </div>
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Submit Changes</button>

            </form>
        )
    }
}
export default withRouter(EditMovie)

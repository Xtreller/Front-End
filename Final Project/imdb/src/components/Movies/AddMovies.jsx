import React, { Component } from 'react';

class AddMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const field = e.target.dataset.name || e.target.name;
        const value = e.target.value;
        const newMovie = {};
        newMovie[field] = value;
        console.log(field, value)
        this.setState({
            movie: Object.assign(this.state.movie, newMovie)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.movie)
        fetch('http://localhost:5000/catalogue/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.movie),
        })
            .then(res => res.json())
            .then(console.log())
    }

    render() {
        return (
            <form >
                <h1>Add Movie</h1>
                <div className="form-group" >
                    <label htmlFor="title">Title</label><br />
                    <input data-name="title" onChange={this.handleChange} type="text" className="form-control" id="title" aria-describedby="titlelHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageFrontCover">Front Cover</label><br />
                    <input data-name="image" onChange={this.handleChange} type="text" className="form-control" id="imageFrontCover" aria-describedby="imageFrontCoverHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageCarousel">Carousel</label><br />
                    <input data-name="imageCarousel" onChange={this.handleChange} type="text" className="form-control" id="imageCarousel" aria-describedby="imageCarouselHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageCarousel">Genre</label><br />
                    <input data-name="imageCarousel" onChange={this.handleChange} type="text" className="form-control" id="imageCarousel" aria-describedby="imageCarouselHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="producer">Producer/s</label><br />
                    <textarea data-name="producers" onChange={this.handleChange} type="text" className="form-control" id="producers" aria-describedby="produecersHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="description">Description</label><br />
                    <textarea name="description" onChange={this.handleChange} type="text" className="form-control" id="description" aria-describedby="descriptionHelp" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="producer">Actors</label><br />
                    <textarea data-name="producers" onChange={this.handleChange} type="text" className="form-control" id="producers" aria-describedby="produecersHelp" />
                </div>
                <br />

                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Submit Movie</button>

            </form>
        )
    }
}
export default AddMovie
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const inputFieldnName = e.target.dataset.name;
        const value = e.target.value;
        const newMovie = {};
        newMovie[inputFieldnName] = value;
        this.setState({
            movie: Object.assign(this.state.movie, newMovie)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/catalogue/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.movie),
        })
        .then(res=>res.json())
        .then(console.log())
    }
  
    render() {
        return (
            <form >
                <h1>Add Movie</h1>
                <div className="form-group" >
                    <label htmlFor="title">Title</label><br />
                    <input data-name="title" onChange={this.handleChange} type="text" className="form-control" id="title" aria-describedby="titlelHelp" placeholder="Title" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageFrontCover">Front Cover</label><br />
                    <input data-name="image" onChange={this.handleChange} type="text" className="form-control" id="imageFrontCover" aria-describedby="imageFrontCoverHelp" placeholder="Enter Url For FrontCover" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="imageCarousel">Carousel</label><br />
                    <input data-name="imageCarousel" onChange={this.handleChange} type="text" className="form-control" id="imageCarousel" aria-describedby="imageCarouselHelp" placeholder="Enter Url For imageCarousel" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="description">Description</label><br />
                    <textarea data-name="description" onChange={this.handleChange} type="text" className="form-control" id="description" aria-describedby="descriptionHelp" placeholder="Enter description" />
                </div>
                <br />
                <div className="form-group" >
                    <label htmlFor="producer">Producer/s</label><br />
                    <textarea data-name="producers" onChange={this.handleChange} type="text" className="form-control" id="producers" aria-describedby="produecersHelp" placeholder="Enter producers names" />
                </div>
                <br />
                
             
                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Submit Movie</button>
               
            </form>
        )
    }
}
export default Movie
import React, { Component } from 'react';

class CreatPokemon extends Component {
    constructor() {
        super();

        this.state = {
            form: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClean = this.handleClean.bind(this)
    }
    handleChange(e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;
        this.setState({
            form: Object.assign(this.state.form, newObj)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/pokedex/create',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                console.log(response);
               this.props.updateRoster(response)
            })
            .catch(err => console.log(err))

    }
    handleClean(){
        fetch('http://localhost:5000/pokedex/clean',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                console.log(response);
               this.props.updateRoster(response)
            })
            .catch(err => console.log(err))

    }
    render() {
        return (

            <form className="w-75 m-auto">
                <h1>Create Pokemon</h1>
                <div className="form-group " />
                <label htmlFor="name">Name</label>
                <input data-name="name" onChange={this.handleChange} type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter Name" />

                <div className="form-group " />
                <label htmlFor="image">Image Url</label>
                <input data-name="image" onChange={this.handleChange} type="text" className="form-control" id="image" aria-describedby="image" placeholder="Enter Image Url" />

                <div className="form-group " />
                <label htmlFor="info">Info</label>
                <input data-name="info" onChange={this.handleChange} type="text" className="form-control" id="info" aria-describedby="info" placeholder="Enter Info" />

                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary m-3">Create</button>
                <button onClick={this.handleClean} type="button" className="btn btn-danger m-3">Clean</button>

            </form>
        )
    }
}

export default CreatPokemon
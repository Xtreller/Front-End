import React, { Component } from "react";

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            form: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const name = e.target.dataset.name;
        const value = e.target.value; 
        const newObj = {};
        newObj[name] = value;
        this.setState({
            form: Object.assign(this.state.form , newObj)
        })
    } 
    handleSubmit(e){
        fetch('http://localhost:5000/auth/register',
        {
            method:'POST',
            body: JSON.stringify(this.state.form),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(data=>data.json())
        .then(response => console.log(response))
        .catch()
    }
    render() {
        return (
            <form className="w-75 m-auto">
                <h1>Register</h1>

                <div className="form-group " />
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <div className="form-group" />
                <label htmlFor="exampleInputPassword1">Password</label>
                <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />

                <div className="form-group" />
                <label htmlFor="Name">Name</label>
                <input data-name="name" type="text" onChange={this.handleChange} className="form-control" id="Name" placeholder="Name" />

                <button onClick={this.handleSubmit} type="button" className="btn btn-primary mt-3">Submit</button>
            </form>
        )
    }
}
export default RegisterForm;
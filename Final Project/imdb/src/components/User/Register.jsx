import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.state.form)
        fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.form),
        }).then(res => res.json())
            .then(console.log)

            .catch(console.log)
    }

    render() {
        return (
            <form >
                <h1>Register</h1>
                <div className="form-group " >
                    <label htmlFor="exampleInputEmail1">Email</label><br />
                    <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group" >
                    <label htmlFor="Name">Name</label><br />
                    <input data-name="name" type="text" onChange={this.handleChange} className="form-control" id="Name" placeholder="Name" />
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputPassword1">Password</label><br />
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Register</button>
                <br /> or <br />
                <Link to="/login">Login</Link>
            </form>
        )
    }
}
export default Register;
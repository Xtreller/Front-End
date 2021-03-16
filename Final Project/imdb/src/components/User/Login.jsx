import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

        fetch('http://localhost:5000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                if (response.success && response.token) {
                    localStorage.setItem('token', response.token);
                    this.props.setLoggedIn(response.user.name);
                    this.props.history.push('/catalogue');
                }
            })
            .catch(err => console.log(err))

    }
    render() {

        return (

            <form >
                <h1>Login</h1>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Email address</label><br />
                    <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group " >
                    <label htmlFor="exampleInputPassword1">Password</label><br />
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Login</button>
                <br /> or <br />
                <Link to="/register">Register</Link>
            </form>
        )
    }
}

export default Login
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"


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
                console.log(response.token)
                console.log('user',response.user)

                if (response.result.success && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userEmail', response.user.email);
                    localStorage.setItem('userRole', response.user.role);
                    console.log('success!')
                    this.props.history.push('/movies');
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
                    <input data-name="email" onChange={this.handleChange} type="email"  aria-describedby="emailHelp"  />
                </div>
                <div className="form-group " >
                    <label htmlFor="exampleInputPassword1">Password</label><br />
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Login</button>
                <br /> or <br />
                <Link to="/register">Register</Link>
            </form>
        )
    }
}

export default withRouter(Login)
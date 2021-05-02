import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import Validate from '../../services/validation';


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
        if (Validate.FormIsEmpty(this.state.form)) {
            this.setState({ err: Validate.FormIsNotEmpty(this.state.form) })

        }
        if (Validate.EmailIsValid(this.state.form.email)) {
            this.setState({ err: "You have entered an invalid email address!" })
        }

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

                if (response.result.success && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userEmail', response.user.email)
                    localStorage.setItem('userRole', response.user.role)

                    localStorage.setItem('blocked', response.user.banned)
                    console.log('success!')
                    this.props.history.push('/movies');
                }
                else {
                    console.log(response.result);
                    this.setState({ err: response.result.message })
                }
            })
            .catch(err => console.log(err))

    }
    render() {

        return (

            <form >
                {<span className='err' htmlFor="comment-input">{this.state.err}</span>}

                <h1>Login</h1>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Email address</label><br />
                    <input data-name="email" onChange={this.handleChange} type="email" aria-describedby="emailHelp" />
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
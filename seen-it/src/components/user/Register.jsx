import React, { Component } from 'react';
import observer from '../../tools/observer';
import requester from '../../tools/requester'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({ [fieldName]: fieldValue })
    }
    handleSubmit(e) {
        e.preventDefault();
        requester.post('user', '', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser,res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
            })

    }
    render() {

        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password" type="password" onChange={this.handleChange}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" onChange={this.handleChange}/>
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )
    }
}

export default Register;
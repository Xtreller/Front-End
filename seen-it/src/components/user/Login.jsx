import React, { Component } from 'react';
import observer from '../../tools/observer';
import requester from '../../tools/requester'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:null,
            password:null
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
        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser,res.username);
                sessionStorage.setItem('authtoken',res._kmd.authtoken);
            })
            this.props.history.push('/catalog')

    }
    render() {

        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password" type="password" onChange={this.handleChange} />
                <input id="btnLogin" type="submit" value="Sign In" />
            </form>
        )
    }
}

export default Login;
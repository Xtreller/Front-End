import React, { Component } from 'react';

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

                }
            })
            .catch(err => console.log(err))

    }
    render() {
       
        return (

            <form className="w-75 m-auto" >
                <h1>Login</h1>
                <div className="form-group " />
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <div className="form-group" />
                <label htmlFor="exampleInputPassword1">Password</label>
                <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />

                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary mt-3">Submit</button>
                
            </form>
        )
    }
}

export default Login
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import Validate from '../../services/validation';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
            err: []
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
        this.setState({ err: [] })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.form)
        // if (Validate.FormIsEmpty(this.state.form)) {
        //     this.setState({ err: ['Fields cannot be empty!'] })
        //     return
        // }
        if (Validate.EmailIsValid(this.state.form.email)) {
            this.setState({ err: ["You have entered an invalid email address!"] })

        }
        else {
            fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.form),
            })
                .then(res => res.json())
                .then(res => {
                    if (res.result.success) {
                        this.props.history.push('/login')
                    }
                    else {
                        this.setState({ err: [res.result.message] })
                    }
                })
                .catch(console.log)
        }
    }

    render() {
        return (
            <form >
                {this.state.err ? this.state.err.map(m =>
                    <label className='err' htmlFor="comment-input">{m}</label>) : ''}

                <h1>Register</h1>
                <div className="form-group" >
                    <label htmlFor="Name">Name</label><br />
                    <input data-name="name" type="text" onChange={this.handleChange} className="form-control" id="Name" />
                </div>
                <div className="form-group " >
                    <label htmlFor="exampleInputEmail1">Email</label><br />
                    <input data-name="email" onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group" >
                    <label htmlFor="exampleInputPassword1">Password</label><br />
                    <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" />
                </div>

                <br />
                <button onClick={this.handleSubmit} type="button" className="btn-submit">Register</button>
                <br /> or <br />
                <Link to="/login">Login</Link>
            </form>
        )
    }
}
export default withRouter(Register);
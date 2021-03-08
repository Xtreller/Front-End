import React, { Component } from 'react';
import '../../style/header.css'
import observer from '../../tools/observer';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };

        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
    }
    userLoggedIn = username => {
        this.setState({ username })
    }
    render() {
        const loggedState =
            <div id="profile">
                <span id="username">Hello, {this.state.username}!</span>|
                <Link to="/logout">logout</Link>
            </div>
        const notLoggedState =
            <div id="profile">
                <Link to="/">Login</Link>
            </div>

        return (
            <header>

                <span className="logo">&#9731;</span><span className="header">SeenIt</span>
                {this.state.username ? loggedState : notLoggedState}

            </header>
        )
    }
}
export default Header
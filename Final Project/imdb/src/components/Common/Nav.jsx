import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            user: {}
        }
        // // this.setNav = this.setNav.bind(this);
        // this.getUser = this.getUser.bind(this);
    }


    render() {
      
        return (
            <header id='header' className="fixed-top " >
                <div className="container d-flex align-items-center">
                    <h1 className="logo"><a href="index.html">IMDB</a></h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="active"><Link to="/about">About</Link></li>
                            <li className="active"><Link to="/contacts">Contacts</Link></li>
                            <li className="active"><Link to="/movies">Catalogue</Link></li>
                            {this.props.isLoggedIn && <li className="active"><Link to="/users">{this.props.userProfile.email}</Link></li>}
                            {this.props.isLoggedIn && <li className="active"><Link to="/logout">Logout</Link></li>}
                            {!this.props.isLoggedIn && <li className="active"><Link to="/login">Login</Link></li>}
                            {!this.props.isLoggedIn && <li className="active"><Link to="/register">Register</Link></li>}

                        </ul>

                    </nav>
                </div>
            </header>)
    }
}
export default Nav
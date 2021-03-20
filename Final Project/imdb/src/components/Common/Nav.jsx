import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props)

        // // this.setNav = this.setNav.bind(this);
        this.logout = this.logout.bind(this);
    }
    logout() {
        this.props.setUserProfile(undefined);
    }

    render() {

        return (
            <header id='header' className="fixed-top " >
                <div className="container d-flex align-items-center ">
                    <h1 className="logo"><a href="/">IMDB</a></h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="active"><Link to="/about">About</Link></li>
                            <li className="active"><Link to="/contacts">Contacts</Link></li>
                            <li className="active"><Link to="/movies">Catalogue</Link></li>
                            {this.props.data.isLoggedIn && <li className="active"><Link to="/users">{this.props.data.userProfile.email}</Link></li>}
                            {this.props.data.isLoggedIn && <li className="active"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>}
                            {!this.props.data.isLoggedIn && <li className="active"><Link to="/login">Login</Link></li>}
                            {!this.props.data.isLoggedIn && <li className="active"><Link to="/register" >Register</Link></li>}
                        </ul>
                    </nav>
                </div>
            </header>)
    }
}
export default Nav
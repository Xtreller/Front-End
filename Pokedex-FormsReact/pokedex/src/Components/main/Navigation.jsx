import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navigation extends Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <nav className="navbar navbar-light bg-dark ">
                <Link to="/">
                    <img src='https://wallpapercave.com/wp/wp2432874.jpg' width="30" height="30" alt="" />
                </Link>
                <NavLink to="/" className="text-info">{this.props.user}</NavLink>
                <Link to="/create" >
                    Add Pokemon
                </Link>
                <Link to="/login"  >
                    Login
                </Link>
                <Link to="/register" >
                    Register
                </Link>
            </nav>
        )
    }
}
export default Navigation;
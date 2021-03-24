import React, { Component } from 'react'
import { Redirect, Link, withRouter } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: undefined
        }
        this.logout = this.logout.bind(this);
    }
    logout() {

        localStorage.clear();
        this.props.history.push('/')
    }
    setUser() {
        const logged = localStorage.getItem('userEmail');
        if (logged) {
            this.setState({ user: logged })
        }
        this.setState({ user: {} })
    }
    componentDidUpdate(_, prevState) {
        if (prevState.user !== this.state.user) { this.setUser(); }
    }
    render() {
        const userEmail = localStorage.getItem('userEmail');
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
                            {userEmail && <li className="active"><Link to="/users">{userEmail}</Link></li>}
                            {userEmail && <li className="active"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>}
                            {!userEmail && <li className="active"><Link to="/login">Login</Link></li>}
                            {!userEmail && <li className="active"><Link to="/register" >Register</Link></li>}
                        </ul>
                    </nav>
                </div>
            </header>)
    }
}
export default withRouter(Nav)
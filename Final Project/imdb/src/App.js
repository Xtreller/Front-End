import './App.css';
import './style.css';
import Register from './components/User/Register';
import Login from './components/User/Login';
import AdminPage from './components/User/AdminPage';
import Welcome from './components/Common/Welcome';
import Catalogue from './components/Movies/Catalogue';
import AddMovies from './components/Movies/AddMovies';
import Nav from './components/Common/Nav';
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {

      isLoggedIn: false,
      userProfile: {}
    }
    this.setUserProfile = this.setUserProfile.bind(this);

  }
  setUserProfile(user) {

    this.setState({
      isLoggedIn: true,
      userProfile: JSON.parse(user)
    })
  }
  render() {
    console.log(this.state.userProfile)
    return (
      <div id="hero" >
        <BrowserRouter>
          <Nav userProfile={this.state.userProfile} isLoggedIn={this.state.isLoggedIn} />
          <Route path='/' exact component={Welcome} />
          <Route path='/register' component={Register} />
          <Route path='/login' render={() => <Login history={this.props.history} setUserProfile={this.setUserProfile} />} />
          <Route path='/movies' component={Catalogue} />
          <Route path='/addMovie' component={AddMovies} />
          <Route path='/users' component={AdminPage} />
          <footer >
            <p>
              Developed By <Link to={'https://github.com/Xtreller'}> Xtrell </Link> © 2021
          </p>
          </footer>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

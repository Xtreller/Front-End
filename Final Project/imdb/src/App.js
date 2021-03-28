import './App.css';
import './style/index.css';
import './style/forms.css';
import Register from './components/User/Register';
import Login from './components/User/Login';
import AdminPage from './components/User/AdminPage';
import Welcome from './components/Common/Welcome';
import Catalogue from './components/Movies/Catalogue';
import AddMovies from './components/Movies/AddMovies';
import Details from './components/Movies/Details';
import Nav from './components/Common/Nav';
import ProtectedRoute from './components/Common/ProtectedRoute';
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userRole: '',
    }

  }
  auth() {
    if (localStorage.getItem('token')) {
      this.setState({ isLoggedIn: true, userRole: localStorage.getItem('userRole') })
    }
  }
  componentDidMount = () => this.auth();


  render() {
    return (
      <div id="hero" >
        <BrowserRouter>
          <Nav data={this.state} />
          <Route path='/' exact component={Welcome} />
          <Route path='/register' component={Register} />
          <Route path='/login' render={() => <Login history={this.props.history} />} />
          <Route path='/movies' component={Catalogue} />
          <Route path='/addMovie' component={AddMovies} />
          <Route path='/Details/:movieid' component={Details} />
          <ProtectedRoute path='/users' component={AdminPage} isAuth={this.state.userRole} />
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

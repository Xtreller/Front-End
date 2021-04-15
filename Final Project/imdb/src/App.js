import './App.css';
import './style/index.css';
import './style/forms.css';
import './style/scroller.css';
import Register from './components/User/Register';
import Login from './components/User/Login';
import AdminPage from './components/User/AdminPage';
import Welcome from './components/Common/Welcome';
import Contacts from './components/Common/Contacts';
import Catalogue from './components/Movies/Catalogue';
import AddMovies from './components/Movies/AddMovies';
import FnEditMovie from './components/Movies/EditMovie';
import DeleteMovie from './components/Movies/Delete';
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


  render() {
    console.log(localStorage.getItem('token'));
    return (
      <div id="hero" >
        <BrowserRouter>
          <Nav data={this.state} />
          <Route path='/' exact component={Welcome} />
          <Route path='/register' component={Register} />
          <Route path='/login' render={() => <Login history={this.props.history} auth={this.auth} />} />
          <Route path='/Contacts' component={Contacts} />
          <Route path='/Details/:movieid' component={Details} />
          <ProtectedRoute path='/editMovie/:movieid' component={FnEditMovie} />
          <ProtectedRoute path='/addMovie' component={AddMovies} />
          <ProtectedRoute path='/movies' component={Catalogue} isAuth={localStorage.getItem('token')} />
          <ProtectedRoute path='/deleteMovie/:movieid' component={DeleteMovie} isAuth={localStorage.getItem('token')} />
          <ProtectedRoute path='/users' component={AdminPage} isAuth={localStorage.getItem('token')} />
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

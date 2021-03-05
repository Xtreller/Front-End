import React, { Component } from "react";
import './App.css';
import RegisterForm from './Components/Register';
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from 'react-router-dom';
import Navigation from "./Components/main/Navigation";
import Home from "./Components/main/Home";
import Footer from "./Components/main/Footer";
import Login from "./Components/Login";
import Pokemons from "./Components/pokemon/PokemonScreen";


import "bootstrap\\dist\\css\\bootstrap.css"


class App extends Component {
  constructor() {
    super()
    let route = '';
    let name = '';
    if (localStorage.getItem('token')) {
      route = 'loggedIn'
    }
    this.state = {
      route,
      name
    }
    this.showAppropropriateComponent = this.showAppropropriateComponent.bind(this);
    this.switchRoutes = this.switchRoutes.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }
  setLoggedIn(name) {
    this.setState({
      route: 'loggedIn',
      name: name
    })
  }

  switchRoutes() {
    if (this.state.route === 'login') {
      this.setState({
        route: 'register'
      })
    }
    if (this.state.route === 'login') {
      this.setState({
        route: 'register'
      })
    }
    else {
      this.setState({
        route: 'login'
      })
    }
  }
  showAppropropriateComponent() {
    if (this.state.route === 'login') {
      return <Login setLoggedIn={this.setLoggedIn} />
    }
    if (this.state.route === 'loggedIn') {
      return <Pokemons />
    }
    return <RegisterForm />
  }
  updateRoster(newRoster) {

  }
  render() {
    return (
      <div className="app">

        <BrowserRouter>
          <Navigation user={this.state.name}  />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" render={() => <Login setLoggedIn={this.setLoggedIn} />} />
          <Route path="/create" component={Pokemons} />
          <Route exact path="/" render={() => (
            localStorage.getItem('token') ? (<Home />):(<Redirect to="/login" />) )} />
          <Footer />
        </BrowserRouter>
      </div>
    )

  }
}

export default App;

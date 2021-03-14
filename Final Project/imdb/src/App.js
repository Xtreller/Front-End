import './App.css';
import './style.css';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Welcome from './components/Common/Welcome';
import Catalogue from './components/Movies/Catalogue';
import Nav from './components/Common/Nav';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <div id="hero">
      <BrowserRouter>

        <Nav />
        <Route path='/' exact component={Welcome} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/movies' component={Catalogue} />
        <footer >
          <p>
          Developed By <Link to={'https://github.com/Xtreller'}> Xtrell </Link> © 2021
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

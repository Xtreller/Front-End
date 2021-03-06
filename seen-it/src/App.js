import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Header from './components/main/Header';
import About from './components/main/About';
import Catalogue from './components/content/Catalogue';
import { BrowserRouter, Link, Route } from "react-router-dom";

import './style/comment.css';
import './style/header.css';
import './style/menu.css';
import './style/post.css';
import './style/site.css';
import './style/submit.css';
import Menu from "./components/main/Menu";
import User from "./components/user/User";


function App() {
  return (
    <BrowserRouter>
    <div id='container'>
      <Header />
      <div className="content">
        <Menu />
      <Route path='/catalog' component={Catalogue} />
      <Route path='/' exact component={User} />
        
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

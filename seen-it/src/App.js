import Header from './components/main/Header';
import Details from './components/posts/Details';
import Catalogue from './components/posts/Catalogue';
import EditForm from './components/posts/EditForm';
import DeletePost from './components/posts/DeletePost';
import { BrowserRouter, Route } from "react-router-dom";

import './style/comment.css';
import './style/header.css';
import './style/menu.css';
import './style/post.css';
import './style/site.css';
import './style/submit.css';
import Menu from "./components/main/Menu";
import User from "./components/user/User";
import Submit from './components/submit/Submit';
import Logout from './components/user/Logout';


function App() {
  return (
    <BrowserRouter>
      <div id='container'>
        <Header />
        <div className="content">
          <Menu />
          <Route path='/catalog' exact component={Catalogue} />
          <Route path='/details/:postid' component={Details} />
          <Route path='/edit/:postid' component={EditForm} />
          <Route path='/delete/:postid' component={DeletePost} />
          <Route path='/submit' component={Submit} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={User} />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

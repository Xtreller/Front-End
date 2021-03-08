import Header from './components/main/Header';
import Comments from './components/posts/Comments';
import Catalogue from './components/posts/Catalogue';
import EditForm from './components/posts/EditForm';
import MyPosts from './components/submit/MyPosts';
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
          <Route path='/comments/:postid' component={Comments} />
          <Route path='/edit' component={EditForm} />
          <Route path='/myposts' component={MyPosts} />
          <Route path='/submit' component={Submit} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={User} />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

import Login from "./Login";
import Register from "./Register";
import About from "../main/About";
import { Component } from "react";

class UserSection extends Component {
  render() {

    return (
      <section id="viewWelcome">
        <div className="welcome">
          <div className="signup">
            <Login {...this.props} />
            <Register />
          </div>
          <div class="about">
            <About />
          </div>
        </div>
      </section>
    )
  }
}
export default UserSection
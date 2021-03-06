import Login from "./Login";
import Register from "./Register";
import About from "../main/About";

const UserSection = () =>{
    return (
        <section id="viewWelcome">
          <div className="welcome">
            <div className="signup">
              <Login />
              <Register />
            </div>
            <div class="about">
              <About />
            </div>
          </div>
        </section>
    )
}
export default UserSection
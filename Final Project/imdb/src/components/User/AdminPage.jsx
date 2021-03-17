import { Component } from "react";
import '../../style/AdminPage.css';

class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        // var temp = this.setState({ movies: res });
    }
    getUsers() {
        fetch('http://localhost:5000/auth/users')
            .then(res => res.json())
            .then(users => this.setState({ users: users.userCollection }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getUsers();


    render() {
        return (
            <div className="catalogue">
                <ul className="userList">
                <li ><h3>Name</h3><h3>Email</h3><h3>Banned</h3><h3>Role</h3><h3>Admin</h3><h3>Block</h3></li>
                    {this.state.users.map((user, idx) => { return <li key={idx} ><h3>{user.name}</h3><h3>{user.email}</h3><h3>{user.banned.toString()}</h3><h3>{user.role}</h3><button type="button" className="btn-action">Make Admin</button><button type="button" className="btn-action">Block</button></li> })}
                </ul>
            </div>)
    }

}
export default Catalogue
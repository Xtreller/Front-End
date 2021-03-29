import { Component } from "react";
import '../../style/AdminPage.css';

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        // var temp = this.setState({ movies: res });
        this.makeAdmin = this.makeAdmin.bind(this);
        this.banUser = this.banUser.bind(this);
    }
    makeAdmin(userid) {
        console.log(userid);
        fetch('http://localhost:5000/auth/makeAdmin/' + userid)
    }
    banUser(userid) {
        console.log(userid);
        fetch('http://localhost:5000/auth/block/' + userid)
            .then(data => data.json())
            .then(users => this.setState({ users: users.userCollection }))
    }
    getUsers() {
        fetch('http://localhost:5000/auth/users', {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(users => this.setState({ users: users.userCollection }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getUsers();

    componentDidUpdate(_, prevState) {
        if (prevState.users !== this.state.users) {
            this.getUsers();
        }
    }

    render() {
        return (
            <ul className="userList">
                <li ><h3>Name</h3><h3>Email</h3><h3>Banned</h3><h3>Role</h3><h3>Admin</h3><h3>Block</h3></li>
                {this.state.users ? this.state.users.map((user, idx) => { return <li key={idx} >{idx + 1}<h3>{user.name}</h3><h3>{user.email}</h3><h3>{user.banned ? 'Yes' : 'No'}</h3><h3>{user.role}</h3><button onClick={() => this.makeAdmin(user._id)} type="button" className="btn-action">Make {user.role === 'user' ? 'Admin' : 'User'} </button><button onClick={() => this.banUser(user._id)} type="button" className="btn-action">{user.banned ? 'unblock' : 'block'}</button></li> }) : <h3>No Users yet!</h3>}
            </ul>
        )
    }

}
export default AdminPage
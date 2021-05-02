import { Link, withRouter } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";

const Confirmation = props => {

    useFetch(`http://localhost:5000/auth/confirm/` + props.match.params.token)

    return (
        <h2>Email Confirmed Successfuly! <Link to="/login">Login</Link></h2>
    )

}
export default withRouter(Confirmation)
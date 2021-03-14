import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header id='header' className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo"><a href="index.html">IMDB</a></h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="active"><Link to="/login">Login</Link></li>
                            <li className="active"><Link to="/register">Register</Link></li>
                            <li className="active"><Link to="/about">About</Link></li>
                            <li className="active"><Link to="/contacts">Contacts</Link></li>
                            <li className="active"><Link to="/movies">Catalogue</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>)
}
export default Nav
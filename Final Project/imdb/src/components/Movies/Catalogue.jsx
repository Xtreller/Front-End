import { Component } from "react";
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    getMovies() {
        fetch('http://localhost:5000/catalogue/movies')
            .then(data => data.json())
            .then(res => this.setState({ movies: res.moviesCollection }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getMovies();


    render() {
        console.log(this.state)
        return (
            <div >
                {localStorage.getItem('userRole') === 'admin' ? <span className="btn-secondary"><Link to="/addMovie">Add Movie</Link></span> : ''}
                <div className="catalogue">
                    {this.state.movies.map((movie, i) => <MovieCard key={i} index={i} movie={movie} />)}
                </div>
            </div>)
    }

}
export default Catalogue
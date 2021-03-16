import { Component } from "react";
import { Link } from 'react-router-dom';
import Movie from './Movie';
var temp = [
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' },
    { title: '7Aces', date: 1615708298074, rating: '7/10' }]
class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
        // var temp = this.setState({ movies: res });
    }
    getMovies() {
        fetch('http://localhost:5000/catalogue/movies')
            .then(data => data.json())
            .then(res => this.setState({ movies: res.moviesColection }))
            .catch(err => console.log(err))
    }
    componentDidMount = () => this.getMovies();


    render() {

        return (
            <div >
                <span className="active"><Link to="/addMovie">Add Movie</Link></span>
                <div className="catalogue">
                    {/* {this.state.movies.map((m,i)=><div>{m.json} - {i}</div>)} */}
                    {temp.map((movie, i) => <Movie key={i} index={i} data={movie} />)}
                </div>
            </div>)
    }

}
export default Catalogue
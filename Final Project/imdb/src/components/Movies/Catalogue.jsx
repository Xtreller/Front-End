import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import useFetch from '../../hooks/useFetch';

const Catalogue = () => {
    // const [movies, setMovies] = useState([])

    const [movies] = useFetch('http://localhost:5000/catalogue/movies');

    return (
        <div >
            {localStorage.getItem('userRole') === 'admin' ? <span className="btn-secondary"><Link to="/addMovie">Add Movie</Link></span> : ''}
            <div className="catalogue">
                {movies?.map((movie, i) => <MovieCard key={i} index={i} movie={movie} />)}
            </div>
        </div>)


}
export default Catalogue
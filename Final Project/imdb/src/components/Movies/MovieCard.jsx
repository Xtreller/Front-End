import { Link } from 'react-router-dom';

const MovieCard = props => {
    return  (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={props.movie.image}
                        alt="Loading..." />
                    <h5>{props.movie.title}</h5>
                    <p>{props.movie.rating}</p>
                    <button id="card-btn"><Link to={{ pathname: `/Details/${props.movie._id}` }}>Details</Link></button>
                </div>
            </div>
        </div>
    )

}
export default MovieCard
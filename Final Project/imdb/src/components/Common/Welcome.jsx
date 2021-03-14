import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <section id="hero" className="d-flex align-items-center ">
            <div className="container position-relative " data-aos="fade-up" data-aos-delay="500">
                <img src='D:\JS\Demo\imdb\src\logo.svg' alt=""/>
                <h1>Welcome to MY-IMDB</h1>
                <h2>We are the new social media platform for reviewing and rating movies and shows</h2>
                <Link  to="/login" className="btn-get-started scrollto ">Get Started</Link>
            </div>
        </section>
    )
}
export default Welcome
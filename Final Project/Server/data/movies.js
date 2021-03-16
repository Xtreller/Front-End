// let movies = [{
//     title: '7Aces',
//     date: Date.now(),
//     rating: '7/10'
// }]
const movieModel = require('../models/movie');

module.exports = {
    addMovie: (data) => {
            console.log({...data})
        movieModel.create({...data})
        .then(res=>console.log(res))
        .then(console.log('Movie added successfuly!'))
        .catch(err=>console.log(err))
    },
    findMovie:(movieId)=>{
        // ToDo
        return movieId
    },
    retriveMovies: () => {
        console.log('movie collection: \n')
        movieModel.find({})
        .then(movies => {
            console.log(movies.map(m=>console.log(m.title)));
            return movies})
        .catch(err=>console.log(err))
    },
    cleanMoviesCollection: () => {
        let movies = []
        return movies
    }
}
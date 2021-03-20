const express = require('express')

const router = new express.Router()

const Movies = require('./../data/movies')
const movieModel = require('../models/movie');



router.post('/create', (req, res, next) => {

    Movies.addMovie((req.body))
    return res.status(200).json(Movies.retriveMovies());

})
router.post('/clean', (req, res, next) => {

    Movies.cleanPokemonCollection();
    return res.status(200).json(Movies.retriveMovies());

})

router.get('/movies', (req, res, next) => {
    console.log('geting')
    movieModel.find({})
        .then(movies => {
            console.log(movies.length)
            return res.status(200).json({ moviesCollection: movies })
        })
        .catch(err => console.log(err))

})
router.get('/movies/:movieid', (req, res, next) => {
    const movieid = req.params.movieid;
    movieModel.findOne({ _id: movieid })
        .then(movie =>res.status(200).json({ movie }))
        .catch(err=>console.log(err))
})

module.exports = router
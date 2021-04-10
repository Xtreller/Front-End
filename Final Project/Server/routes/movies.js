const express = require('express')
const router = new express.Router()

const movieModel = require('../models/movie');

router.post('/create', (req, res, next) => {
    let result = {
        success: true,
        message: []
    };
    const { title, image, genre, carouselImages, producers, description, actors } = req.body;

    let genres = ['horror', 'romantic', 'thriller',
        'adventure', 'criminal', 'mystery',
        'fantasy', 'sports', 'action',
        'comedy', 'animation', 'anime']

    if (!genres.includes(genre)) {
        result.success = false;
        result.message.push('The possible genres are: \n' + genres.join(', ') + '\n')
    }
    movieModel.exists({ title: title })
        .then(exists => {
            console.log(exists)
            if (exists) {
                result.success = false;
                result.message.push('Movie already exists \n');
                console.log('title:', result);
            }
        })
        .then(res => console.log('here', res))
        .catch(err => console.log(err))
    movieModel.exists({ image: image })
        .then(exists => {
            if (exists) {
                result.success = false;
                result.message.push('Movie with this cover image already exists! \n');
            }
            console.log('image', result);
        })
    // .then(() => res.json(result))
    if (result.success === false) {

        console.log('sent', result)
        setTimeout(() => res.json(result), 2000);
    }
    else {
        movieModel.create({ ...req.body })
            .then(res => console.log(res))
            .then(res.redirect('/catalogue/movies'))
            .catch(err => console.log(err))
        return res.status(200).json(Movies.retriveMovies());
    }

})
router.post('/edit/:movieid', (req, res, next) => {
    console.log('Updating...')
    const { title, image, carouselImages, description, actors, producers, genre } = req.body;
    movieModel
        .updateOne(
            { _id: req.params.movieid },
            { title, image, carouselImages, description, actors, producers, genre })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    return res.status(200).json(Movies.retriveMovies());

})
router.post('/clean', (req, res, next) => {

    Movies.cleanPokemonCollection();
    return res.status(200).json(Movies.retriveMovies());

})

router.get('/movies', (req, res, next) => {
    console.log('getting')
    movieModel.find({})
        .then(movies => {
            return res.status(200).json({ moviesCollection: movies })
        })
        .catch(err => console.log(err))

})
router.get('/movies/:movieid', (req, res, next) => {
    const movieid = req.params.movieid;
    console.log(movieid);
    movieModel.findOne({ _id: movieid })
        .then(movie => res.status(200).json({ movie }))
        .catch(err => console.log(err))
})
router.get('/movie/comments/:movieid', (req, res, next) => {
    const movieid = req.params.movieid;
    console.log('getComments');
    movieModel.findById(movieid)
        .then(movie => res.status(200).json({ comments: movie.comments }))
        .catch(err => console.log(err));
})
router.post('/movie/addComment/:movieid', (req, res, next) => {
    const movieid = req.params.movieid;
    const comment = req.body.comment;
    console.log('movie id: ', movieid)
    if (comment) {
        movieModel.updateOne(
            { _id: movieid },
            { $push: { comments: comment } },
            (err, done) => {
                if (err) {
                    console.log(err);
                }
                done
            }
        ).then(res.redirect('/catalogue/movie/comments/' + movieid));
    }
})

module.exports = router
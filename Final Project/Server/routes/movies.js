const express = require('express')

const router = new express.Router()

const Movies = require('./../data/movies')


router.post('/create',(req,res,next)=>{

    Movies.addMovie((req.body))
    return res.status(200).json(Movies.retriveMovies());

})
router.post('/clean',(req,res,next)=>{

    Movies.cleanPokemonCollection();
    return res.status(200).json(Movies.retriveMovies());

})

router.get('/movies',(req,res,next)=>{
    console.log('geting')
    let moviesColection = (Movies.retriveMovies())
    console.log(moviesColection)
    return res.status(200).json({moviesColection})
})

module.exports = router
const mongoose = require('mongoose');

const movieModel = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2, unique: true },
    image: { type: String, required: true },
    genre: [{
        type: String,
        enum: ['horror', 'romantic', 'thriller',
            'adventure', 'criminal', 'mystery',
            'fantasy', 'sports', 'action',
            , 'comedy', 'action', 'animation', 'anime']
    }],
    carouselImages: [String],
    actors: { type: Array },
    producers: String,
    publishDate: Date,
    description: String,
    rating: { type: Number, min: 1, max: 10 },
    comments: [Object],
});
module.exports = new mongoose.model('Movie', movieModel);
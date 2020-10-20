const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const key = process.env.KEY

router.get('/movies', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
        .then((movie) => {
            console.log(movie.data.results);
            let result = movie.data.results;
            return res.render('main/index', {result: result});
        })
});



module.exports = router;
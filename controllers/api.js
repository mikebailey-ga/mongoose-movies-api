const Movie = require('../models/movie');
module.exports = {
    listAllMovies,
    listOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
};

function listAllMovies(req, res){
    Movie.find({}).then(function(movies){
      res.status(200).json(movies);
    }).catch(console.log("broken!"));
}

function listOneMovie(req, res){
    Movie.findById(req.params.id).then(function(movie){
        res.status(200).json(movie);
    });
}

function createMovie(req, res){
    Movie.create(req.body).then(function(movie){
        res.status(201).json(movie);
    });
}

function updateMovie(req, res){
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(movie) {
        res.status(200).json(movie);
      });    
}

function deleteMovie(req, res){
    Movie.findByIdAndRemove(req.params.id).then(function(movie) {
        res.status(200).json(movie);
      });    
}
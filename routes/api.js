var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/api');

router.get('/movies', apiCtrl.listAllMovies);
router.get('/movies/:id', apiCtrl.listOneMovie);
router.post('/movies', apiCtrl.createMovie);
router.put('/movies/:id', apiCtrl.updateMovie);
router.delete('/movies/:id', apiCtrl.deleteMovie);


module.exports = router;
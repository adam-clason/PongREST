var express = require('express');
var async = require('async');
var router = express.Router();
var Game = require('../models/Game');

router.get('/', function(req, res, next) {
	Game.find({}, function(err, games) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error Getting Game');
		}
		res.json(games);
	});  
});

router.get('/:id', function(req, res, next) {
  	Game.find({
  		_id : req.params.id
  	}, function(err, game) {
  		if (err) {
  			res.statusCode = 500;
  			return res.send('Error Getting Game');
  		}
  		res.json(game);
  	});
});

router.post('/', function(req, res, next) {
	var players = req.body.players;
	Game.create({
		players : players,	
		sets : [],
		created : new Date()	
	}, function(err, game) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error Creating Game');
		}
		res.json(game);
	});

});

router.post('/:id/set', function(req, res, next) {	
	async.series([
		function(callback) {
			Game.findById(req.params.id}, function(err, game) {
				callback(err, game);
			});
		}, 
		function(game, callback) {
			game.sets.push(
				setNumber : game.sets.length + 1,
				scores : req.body.scores
			);
			game.save(function(err) {
				callback(err, game);
			});
		},
		function(game, callback) {
			res.json(game);
		}
	] function(err) {
		res.statusCode = 500;
		return res.send('Error Saving Set');
	});
	
});

module.exports = router;

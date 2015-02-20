var express = require('express');
var router = express.Router();
var Player = require('../models/Player');

router.get('/', function(req, res, next) {
	Player.find({}, function(err, players) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error Getting Players');
		}
		res.json(players);
	});  
});

router.get('/:id', function(req, res, next) {
  	Player.find({
  		_id : req.params.id
  	}, function(err, player) {
  		if (err) {
  			res.statusCode = 500;
  			return res.send('Error Getting Player');
  		}
  		res.json(player);
  	});
});

router.post('/', function(req, res, next) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;	
	Player.create({
		firstName : firstName,
		lastName : lastName,
		created : new Date()
	}, function(err, player) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error Creating Player');
		}
		res.json(player);
	});

});

module.exports = router;

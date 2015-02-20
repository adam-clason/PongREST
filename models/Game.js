 var mongoose = require('mongoose');


var ScoreSchema new mongoose.Schema({
	player : mongoose.Schema.Types.ObjectId,
	score : Number 
});

var SetSchema = new mongoose.Schema({
	setNumber : Number, 
	scores : [ScoreSchema]
});

 var GameSchema = new mongoose.Schema({
 	players : [mongoose.Schema.Types.ObjectId],
 	created : Date,
 	sets : [SetSchema] 
 });

 module.exports = mongoose.model('Game', GameSchema);
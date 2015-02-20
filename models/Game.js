 var mongoose = require('mongoose');

 var GameSchema = new mongoose.Schema({
 	firstName : String,
 	lastName : String,  
 });

 module.exports = mongoose.model('Game', GameSchema);
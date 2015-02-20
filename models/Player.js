 var mongoose = require('mongoose');


 var PlayerSchema = new mongoose.Schema({
 	firstName : String,
 	lastName : String,  
 });

 module.exports = mongoose.model('Player', PlayerSchema);
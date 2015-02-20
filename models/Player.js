var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,  
  created : Date
});

module.exports = mongoose.model('Player', PlayerSchema);
var mongoose = require("mongoose");

var userschema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = new mongoose.Model(user, userschema);

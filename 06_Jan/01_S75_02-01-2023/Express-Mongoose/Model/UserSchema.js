var mongoose = require("mongoose");
var mongoosevalidator = require("mongoose-unique-validator");

var userschema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: Number,
});
userschema.plugin(mongoosevalidator);
var User = new mongoose.model("user", userschema);

module.exports = User;

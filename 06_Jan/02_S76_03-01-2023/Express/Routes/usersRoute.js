var express = require("express");
var bycrypt = require("bcryptjs");

var userdata = {
  name: "Kabir",
  password: "Kabir123",
  email: "Kabir@gmail.com",
};
var salt = bycrypt.genSaltSync(10);
var hashpassword = bycrypt.hashSync(userdata.password, salt);

// console.log(salt);
// console.log(newpassword);

var match = bycrypt.compareSync("Kabir125328321", hashpassword);
console.log(match);

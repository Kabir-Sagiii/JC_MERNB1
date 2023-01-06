var express = require("express");
var jwt = require("jsonwebtoken");
var secret_key = "123@345";

var app = express();

function verifytoken(req, res, next) {
  var token = req.headers.authorization;
  console.log(!(token === "undefined"));
  if (!(token == "undefined")) {
    req.token = token;
    next();
  } else {
    res.json({
      status: "Failure",
      msg: "Token is not Received, Please send the token",
    });
  }
}

app.post("/profile", verifytoken, (req, res) => {
  // check weather client sent token or not
  //if yes then Validate the token ,
  //connect with database and do required operation

  jwt.verify(req.token, secret_key, (err, tokendetails) => {
    if (err) {
      res.json({
        status: "Failure",
        msg: "Invalid Token",
      });
    } else {
      //connect with database, do required operation

      res.json({
        status: "Success",
        results: ["<Profile Data>"],
        details: tokendetails,
      });
    }
  });
});

app.post("/login", (req, res) => {
  var user = {
    username: "Rahul",
    password: "Rahul@123",
  };

  jwt.sign(user, secret_key, (err, token) => {
    if (err) {
      console.log(err);
      res.json({
        status: "failed",
        msg: "Token failed to generate",
      });
    } else {
      // write the logic to connect with db, Validate User and fetch home page details
      res.send({
        status: "Success",
        token,
        result: ["<data>"],
      });
    }
  });
});

app.listen(6001, () => {
  console.log("Server started");
});

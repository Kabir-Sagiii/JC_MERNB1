var express = require("express");
var User = require("../Model/UserSchema");
var bycrypt = require("bcryptjs");

var userroute = express.Router();

userroute.get("/", (req, res) => {
  res.send("USer Route is working");
}); //http://localhost:5001/user/

userroute.get("/getusers", (req, res) => {
  //http://localhost:5001/user/getusers
  User.find({ email: "Kabir@gmail.com" }, (err, data) => {
    if (err) {
      res.json({
        status: "FAILURE",
        msg: "FAILED TO RETRIEVE THE DATA",
      });
    } else {
      res.json({
        status: "SUCCESS",
        results: data,
      });
    }
  });
});

userroute.get("/specificuser", (req, res) => {
  User.findById("63b296271a60e8070c4db826", (err, data) => {
    if (err) {
      res.json({
        status: "FAILURE",
        msg: "FAILED TO RETRIEVE THE DATA",
      });
    } else {
      res.json({
        status: "SUCCESS",
        results: data,
      });
    }
  });
});

userroute.post("/newuser", (req, res) => {
  //http://localhost:5001/user/newuser

  var salt = bycrypt.genSaltSync(10);
  var hashpassword = bycrypt.hashSync(req.body.password, salt);

  var newuser = new User({
    name: req.body.name,
    password: hashpassword,
    email: req.body.email,
    phone: req.body.phone,
  });

  newuser
    .save()
    .then(() => {
      res.json({
        status: "SUCCESS",
        msg: "Inserted Data successfully",
      });
    })
    .catch(() => {
      res.json({
        status: "Failure",
        msg: " Data Not Stored Successfully successfully",
      });
    });
});

userroute.delete("/delete", (req, res) => {
  User.deleteOne(
    {
      name: "Isha",
    },
    (err, msg) => {
      if (err) {
        res.json({
          status: "FAILURE",
          msg: "FAILED TO Delete",
        });
      } else {
        res.json({
          status: "SUCCESSfully",
          msg: "Deleted Successfully",
        });
      }
    }
  );
});

module.exports = userroute;

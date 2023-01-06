var express = require("express");
var app = express();
var port = 7001;
var jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.send("<h2>Working</h2>");
});

app.post("/profile", verifytoken, (req, res) => {
  jwt.verify(req.token, "logindata", (err, valid) => {
    if (err) {
      res.send({
        msg: "Invalid Token",
      });
    } else {
      res.send({
        msg: "welldone",
      });
    }
  });
});

function verifytoken(req, res, next) {
  var bearer = req.headers.authorization;
  console.log(bearer);
  bearer = bearer.split(" ");
  console.log(bearer);
  bearer = bearer[1];
  //   console.log(bearer);
  req.token = bearer;
  next();
}

app.post("/login", (req, res) => {
  var data = {
    name: "Sagar",
    password: "Sagi21",
  };

  jwt.sign(data, "logindata", (err, token) => {
    if (err) {
      res.json({
        status: "Failure",
        msg: "Failed to generate token",
        errorMsg: err,
      });
    } else {
      res.json({
        status: "Success",
        token,
      });
    }
  });
});
app.listen(port, () => {
  console.log("Server started");
});

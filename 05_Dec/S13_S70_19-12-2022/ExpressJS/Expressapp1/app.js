var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome Express JS");
}); // http://localhost:4001/

app.get("/htmltag", (req, res) => {
  res.send("<h2>Welcome to Express</h2>");
}); //// http://localhost:4001/htmltag

app.get("/file", (req, res) => {
  fs.readFile("./home.html", "utf-8", (err, data) => {
    if (err) {
      res.send("error while fetching the data");
    } else {
      res.send(data);
    }
  });
}); // http://localhost:4001/file

app.get("/json", (req, res) => {
  fs.readFile("./products.json", "utf-8", (err, data) => {
    data = JSON.parse(data);
    res.json(data);
  });
}); // http://localhost:4001/json

app.listen(4001, () => {
  console.log("Server is Started");
});

var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");

var app = express();
dotenv.config({ path: "./config.env" });
const port = 5001;

var userroute = require("./Routes/usersRoute");
app.use(express.json());
app.use("/user", userroute);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Successfully connected with Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is Started");
});

var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var productroute = require("./Routes/productsRoute");

var app = express();
dotenv.config({ path: "./config.env" });
const port = 6001;

app.use(express.json());
app.use("/products", productroute);

app.get("/", (req, res) => {
  res.send("<h1>Working </h1>");
}); // http://localhost:6001/

//connect with Mongodb Databse using Mongoose
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Successfully Connected With Database");
  })
  .catch((err) => {
    console.log("Something went wrong while Connecting With Database");
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server Started");
});

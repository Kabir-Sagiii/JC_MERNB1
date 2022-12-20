var express = require("express");
var fs = require("fs");
var cors = require("cors");
var bodyparser = require("body-parser");

const route = express();

route.use(cors());
route.use(bodyparser());

route.get("/user", (req, res) => {
  res.json([{ name: "Kabir" }, { name: "Raj" }, { name: "Isha" }]);
}); //http://localhost:6001/user

route.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
}); //http://localhost:6001/products

route.post("/data", (req, res) => {
  console.log(req.body);
  //   var name = req.body.name;
  //   var price = req.body.price;
  //   var category = req.body.category;
  var data = JSON.stringify(req.body);
  fs.writeFile("./newdata.txt", data, () => {
    console.log("File Created");
  });

  res.send("Received the Data");
});
//http://localhost:6001/data

route.listen(6001, () => {
  console.log("Server Started");
});

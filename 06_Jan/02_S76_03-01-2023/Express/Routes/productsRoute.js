var express = require("express");
var productsModel = require("../Model/productModel");

var productroute = express.Router();

productroute.post("/newproduct", (req, res) => {
  var newproduct = new productsModel({
    pname: req.body.pname,
    brand: req.body.brand,
    price: req.body.price,
    rating: req.body.rating,
  });

  newproduct
    .save()
    .then(() => {
      res.json({
        status: "SUCCESS",
        msg: "Inserted data Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "FAILURE",
        msg: "Failed to insert the data",
      });
    });
}); //http://localhost:6001/products/newproduct

productroute.get("/getdata", (req, res) => {
  productsModel.find({}, (err, data) => {
    if (err) {
      res.json({
        status: "Failure",
        msg: "Unable to fetch data",
      });
    } else {
      res.json({
        status: "SUCCESS",
        results: data,
      });
    }
  });
}); //http://localhost:6001/products/getdata
module.exports = productroute;

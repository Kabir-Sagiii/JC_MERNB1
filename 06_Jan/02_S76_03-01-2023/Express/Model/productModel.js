var mongoose = require("mongoose");

var productScehma = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    default: "Product Brand",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,

    default: 0,
  },
});
var productsModel = new mongoose.model("product", productScehma);

module.exports = productsModel;

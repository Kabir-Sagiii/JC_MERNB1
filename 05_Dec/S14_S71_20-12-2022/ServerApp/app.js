var express = require("express");
var fs = require("fs");
var cors = require("cors");
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
// var bodyparser = require("body-parser");
const url =
  "mongodb+srv://kabir:kabir5757@cluster0.dd2oz.mongodb.net/?retryWrites=true&w=majority";

const route = express();

route.use(cors());
// route.use(bodyparser());
route.use(express.json());
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

// route.get("/getdb", (req, res) => {
//   mongoClient.connect(url, (err, cluster) => {
//     if (err) {
//       res.send("error while connecting");
//     } else {
//       var db = cluster.db("KnowledgeDB");
//       var coll = db.collection("collection1");
//       coll.find().toArray((err, data) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(data);
//         }
//       });
//     }
//   });
// });

// route.post("/senddb", (req, res) => {
//   console.log(req.body);
//   //   var name = req.body.name;
//   //   var price = req.body.price;
//   //   var category = req.body.category;
//   // var data = JSON.stringify(req.body);
//   mongoClient.connect(url, (err, cluster) => {
//     if (err) {
//       res.send("error while connecting");
//     } else {
//       var db = cluster.db("KnowledgeDB");
//       var coll = db.collection("collection1");
//       coll.insertOne(req.body, (err, data) => {
//         if (err) {
//           res.send("Error while sending data");
//         } else {
//           res.json({
//             status: 200,
//             msg: "Inserted Successfully",
//             Ok: true,
//           });
//         }
//       });
//     }
//   });
// }); //http://localhost:6001/senddb

route.listen(6001, () => {
  console.log("Server Started");
});

var express = require("express");
var { MongoClient } = require("mongodb");

var routes = express();
var dburl =
  "mongodb+srv://kabir:kabir5757@cluster0.dd2oz.mongodb.net/?retryWrites=true&w=majority";

routes.get("/userdata", (req, res) => {
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.send({
        OK: false,
        msg: "Error while connecting with the Database",
      });
      console.log(err);
    } else {
      const dbRef = cluster.db("usersdb");
      const collRef = dbRef.collection("userscollection");
      collRef.find().toArray((err, data) => {
        if (err) {
          res.send({
            OK: false,
            msg: "errror while getting the data",
          });
        } else {
          res.json({
            OK: true,
            length: data.length,
            results: data,
          });
        }
      });
    }
  });
}); // http://localhost:8001/users/userdata

routes.post("/newuser", (req, res) => {
  console.log(req.body);
  MongoClient.connect(dburl, (err, cluster) => {
    var dbref = cluster.db("usersdb");
    var coll = dbref.collection("userscollection");

    coll.insertOne(req.body, (err) => {
      if (err) {
        res.json({
          OK: false,
          msg: "error while Inserting the data",
        });
      } else {
        res.json({
          Ok: true,
          msg: "Inserted Record Successfully",
        });
      }
    });
  });
}); //http://localhost:8001/users/newuser

module.exports = routes;

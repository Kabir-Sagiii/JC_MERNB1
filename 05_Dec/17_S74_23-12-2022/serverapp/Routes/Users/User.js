var express = require("express");
var { MongoClient, ObjectId } = require("mongodb");

const dbname = "usersdb";
const collectionname = "userscollection";
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

routes.get("/specificuser/:id", (req, res) => {
  var id = req.params.id;
  // console.log(id);
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connectng with DataBase",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);
      collRef
        .find({
          _id: ObjectId(id),
        })
        .toArray((err, data) => {
          if (err) {
            res.json({
              OK: false,
              msg: "Error while fetching the data",
            });
          } else {
            res.json({
              OK: true,
              results: data,
            });
          }
        });
    }
  });
}); //http://localhost:8001/users/specificuser/<id>

routes.put("/updateuser/:id", (req, res) => {
  var id = req.params.id;

  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connectng with DataBase",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);

      collRef.updateOne(
        { _id: ObjectId(id) },
        {
          $set: req.body,
        },
        (err, data) => {
          if (err) {
            res.json({
              OK: false,
              msg: "Failed to Update Information",
            });
          } else {
            res.json({
              Ok: true,
              msg: "Updated successfully",
            });
          }
        }
      );
    }
  });
}); //http://localhost:8001/users/updateuser/<id>

routes.delete("/delete/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connectng with DataBase",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);
      collRef.deleteOne({ _id: ObjectId(id) }, (err, data) => {
        if (err) {
          res.json({
            Ok: false,
            msg: "Failed to Delete Information",
          });
        } else {
          res.json({
            Ok: true,
            msg: "Deleted Successfully",
          });
        }
      });
    }
  });
}); //http://localhost:8001/users/delete/<id>

module.exports = routes;

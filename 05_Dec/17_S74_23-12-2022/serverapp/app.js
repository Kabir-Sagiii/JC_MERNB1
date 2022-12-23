var express = require("express");
var mongodb = require("mongodb");
var cors = require("cors");
const mongoClient = mongodb.MongoClient;
var userRouter = require("./Routes/Users/User");

var dburl =
  "mongodb+srv://kabir:kabir5757@cluster0.dd2oz.mongodb.net/?retryWrites=true&w=majority";

var route = express();
route.use(cors());
route.use(express.json());

route.use("/users", userRouter);
route.get("/productdb", (req, res) => {
  mongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.send("Error while connecting With Database");
      console.log(err);
    } else {
      var dbRef = cluster.db("ProductDB");
      var collectionRef = dbRef.collection("electronicCollection");
      collectionRef.find().toArray((err, data) => {
        if (err) {
          res.send("Error Fetching the Data");
        } else {
          res.json({
            results: data,
            Ok: true,
          });
        }
      });
    }
  });
}); //http://localhost:8001/productdb

route.listen(8001, () => {
  console.log("NodeJS server Started");
});

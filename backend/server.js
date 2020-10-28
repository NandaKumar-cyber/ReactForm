const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { connect } = require("mongoose");
const { error } = require("console");
const port = 3001;

app.use(cors());

connect(
  "mongodb+srv://nandha420:nandha420@cluster0.sbmne.mongodb.net/nandha420?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("Database Connected successfully..");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/details", function (req, res) {
  console.log("------>posted<------", req.body);
  var item_purchased = req.body.item_purchased;
  var order_number = req.body.order_number;
  var value = req.body.value;
  var mobile_number = req.body.mobile_number;

  //creating schema
  var detailsSchema = mongoose.Schema({
    item_purchased: String,
    order_number: String,
    value: Number,
    mobile_number: Number,
  });
  var user = mongoose.model("User", detailsSchema, "users");

  var User1 = new user({
    item_purchased: item_purchased,
    order_number: order_number,
    value: value,
    mobile_number: mobile_number,
  });

  User1.save(function (err, data) {
    if (err) {
      res.send({ status: 0, result: err });
    } else {
      res.send({ status: 1, result: data });
    }
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is Running at " + port);
});

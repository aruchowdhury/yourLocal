"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const { ObjectId } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//handler to get all orders

const getAllOrders = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  // console.log("connected");

  const orders = await db.collection("orders").find().toArray();
  res.status(200).json({ status: 200, data: orders });
  client.close();
};

// handler to post orders

const postOrder = async (req, res) => {
  const orderInfo = req.body;
  // console.log(req.body);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const orders = await db.collection("orders").insertOne(orderInfo);
  res.status(200).json({ status: 200, data: orders });
  client.close();
};

//get menu items by restaurant id works

const getOrderById = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", _id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db.collection("orders").findOne({ _id: ObjectId(id) });
  result
    ? res.status(200).json({ status: 200, id, data: result })
    : res.status(404).json({ status: 404, id, data: "Not Found" });
  client.close();
};

module.exports = {
  getAllOrders,
  postOrder,
  getOrderById,
};

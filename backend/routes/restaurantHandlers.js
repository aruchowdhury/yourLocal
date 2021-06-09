"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { ObjectId } = require("mongodb");

// handler to get all restaurant works

const getAllRestaurant = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  // console.log("connected");

  const restaurants = await db.collection("restaurants").find().toArray();
  res.status(200).json({ data: restaurants });
  client.close();
};

// handler to post restaurant works

const postRestaurant = async (req, res) => {
  const restaurantInfo = req.body;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const restaurants = await db
    .collection("restaurants")
    .insertOne(restaurantInfo);
  res.status(200).json({ status: 200, data: restaurants });
  client.close();
};

//get restaurant by id works

const getRestaurantById = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db
    .collection("restaurants")
    .findOne({ _id: ObjectId(id) });
  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: "Not Found" });
  client.close();
};

//get restaurant by category does not work

// const getRestaurantByCategory = async (req, res) => {
//   const { category } = req.params;

//   // console.log("restaurantId", id);
//   const client = await MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db("your-local");

//   const result = await db.collection("restaurants").findOne({ category });
//   result
//     ? res.status(200).json({ status: 200, data: result })
//     : res.status(404).json({ status: 404, data: "Not Found" });
//   client.close();
// };

//update restaurant by id works

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const toUpdate = req.body;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const restaurant = await db
    .collection("restaurants")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: toUpdate });

  res
    .status(200)
    .json({ status: 200, data: restaurant, itemsUpdated: toUpdate });
  client.close();
};

//delete menu item by id works

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db
    .collection("restaurants")
    .deleteOne({ _id: ObjectId(id) });
  console.log("result", result);
  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: "Not Found" });
  client.close();
};

module.exports = {
  getAllRestaurant,
  postRestaurant,
  getRestaurantById,
  // getRestaurantByCategory,
  updateRestaurant,
  deleteRestaurant,
};

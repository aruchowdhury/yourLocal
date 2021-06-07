"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// handler to get all restaurant

const getAllRestaurant = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  // console.log("connected");

  const restaurants = await db.collection("restaurants").find().toArray();
  res.status(200).json({ data: restaurants });
  client.close();
};

// handler to post restaurant

const postRestaurant = async (req, res) => {
  const restaurantInfo = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  // if working on menus collection, I change the name here:
  const restaurants = await db
    .collection("restaurants")
    .insertOne(restaurantInfo);
  res.status(200).json({ status: 200, data: restaurants });
  client.close();
};

module.exports = {
  getAllRestaurant,
  //   getRestaurantByCategory,
  //   getRestaurantById,
  postRestaurant,
  //   deleteRestaurant,
};

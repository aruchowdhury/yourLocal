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
  const db = client.db("restaurants");

  console.log("connected");

  const restaurants = await db.collection("restaurant").find().toArray();
  res.status(200).json({ status: 200, data: restaurants });
  client.close();
};

module.exports = {
  getAllRestaurant,
  //   getRestaurantByCategory,
  //   getRestaurantById,
  //   postRestaurant,
  //   deleteRestaurant,
  //   getAllFoodItem,
  //   getAllFoodItemById,
  //   postMenuItem,
  //   updatemenuItem,
  //   deleteMenuItem,
};

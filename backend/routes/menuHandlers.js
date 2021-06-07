"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//handler to get all menu items

const getAllMenuItems = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  // console.log("connected");

  const menus = await db.collection("menus").find().toArray();
  res.status(200).json({ status: 200, data: menus });
  client.close();
};

// handler to post menu items

const postMenuItem = async (req, res) => {
  const menuInfo = req.body;
  // console.log(req.body);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  // if working on menus collection, I change the name here:
  const menus = await db.collection("menus").insertOne(menuInfo);

  res.status(200).json({ status: 200, data: menus });
  client.close();
};

//get menu items by restaurant id

const getMenuItemsByRestaurantId = async (req, res) => {
  const restaurantId = req.params.restaurantId;

  // console.log("restaurantId", restaurantId);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menus = await db.collection("menus").find(restaurantId).toArray();
  res.status(200).json({ status: 200, data: menus });
  client.close();
};

module.exports = {
  getAllMenuItems,
  //   getAllMenuItemById,
  postMenuItem,
  getMenuItemsByRestaurantId,
  //   updatemenuItem,
  //   deleteMenuItem,
};

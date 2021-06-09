"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const { ObjectId } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//handler to get all menu items works

const getAllMenuItems = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  // console.log("connected");

  const menus = await db.collection("menus").find().toArray();
  res.status(200).json({ status: 200, data: menus });
  client.close();
};

// handler to post menu items works

const postMenuItem = async (req, res) => {
  const menuInfo = req.body;
  // console.log(req.body);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menus = await db.collection("menus").insertOne(menuInfo);
  res.status(200).json({ status: 200, data: menus });
  client.close();
};

//get menu items by restaurant id works

const getMenuItemsByRestaurantId = async (req, res) => {
  const { restaurantId } = req.params;

  // console.log("restaurantId", restaurantId);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menus = await db.collection("menus").find({ restaurantId }).toArray();
  res.status(200).json({ status: 200, data: menus });
  client.close();
};

//get menu items by item id

const getMenuItemsById = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", _id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db.collection("menus").findOne({ _id: ObjectId(id) });
  result
    ? res.status(200).json({ status: 200, id, data: result })
    : res.status(404).json({ status: 404, id, data: "Not Found" });
  client.close();
};

//update menu items by id works

const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const toUpdate = req.body;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menu = await db
    .collection("menus")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: toUpdate });

  res.status(200).json({ status: 200, data: menu, itemsUpdated: toUpdate });
  client.close();
};

//delete menu item by id works

const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", _id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db.collection("menus").deleteOne({ _id: ObjectId(id) });
  console.log("result", result);
  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: "Not Found" });
  client.close();
};

module.exports = {
  getAllMenuItems,
  getMenuItemsById,
  postMenuItem,
  getMenuItemsByRestaurantId,
  updateMenuItem,
  deleteMenuItem,
};

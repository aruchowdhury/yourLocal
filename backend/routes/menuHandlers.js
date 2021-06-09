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
  const { _id } = req.params;

  // console.log("restaurantId", _id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menu = await db.collection("menus").findOne({ _id }).toArray();
  res.status(200).json({ status: 200, data: menu });
  client.close();
};

//update menu items by id
const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image } = req.body;
  const newValues = {
    set: {
      name: name,
      description: description,
      price: price,
      image: image,
    },
  };

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");
  const menu = await db
    .collection("menus")
    .updateOne({ _id: ObjectID(id) }, newValues);

  res.status(200).json({ status: 200, data: menu });
  client.close();
};

//delete menu item by id

const deleteMenuItem = async (req, res) => {
  const { _id } = req.params;

  // console.log("restaurantId", _id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const menu = await db.collection("menus").deleteOne({ _id }).toArray();
  res.status(200).json({ status: 200, data: menu });
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

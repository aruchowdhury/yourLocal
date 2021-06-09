"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { ObjectId } = require("mongodb");

// get all user works

const getAllUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const users = await db.collection("users").find().toArray();
  res.status(200).json({ status: 200, data: users });
  client.close();
};

// get a single use by id works

const getUserById = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const { id } = req.params;
  await client.connect();
  const db = client.db("your-local");

  const result = await db.collection("users").findOne({ _id: ObjectId(id) });
  result
    ? res.status(200).json({ status: 200, id, data: result })
    : res.status(404).json({ status: 404, id, data: "Not Found" });

  client.close();
};

// post a new user works

const registerUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const userInfo = req.body;
  const user = await db.collection("users").insertOne(userInfo);

  res.status(200).json({ status: 200, data: user });
  client.close();
};

// post a user login works but app cheshes after login

const loginUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const { email } = req.body;

  const users = await db.collection("users").find().toArray();

  if (users) {
    let identifiedUser = users.find((user) => user.email === email);
    if (!identifiedUser) {
      res.status(401).json({ status: 401, message: "bad pw" });
    } else {
      res.status(200).json({ status: 200, data: identifiedUser });
    }
  }
  res.status(401).json({ status: 401, message: "could not found user" });
  client.close();
};

//delete a user by id works

const deleteUser = async (req, res) => {
  const { id } = req.params;

  // console.log("restaurantId", id);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const result = await db.collection("users").deleteOne({ _id: ObjectId(id) });
  console.log("result", result);
  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: "Not Found" });
  client.close();
};
module.exports = {
  getUserById,
  getAllUsers,
  registerUser,
  loginUser,
  deleteUser,
};

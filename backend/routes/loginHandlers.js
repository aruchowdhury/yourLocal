"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const users = await db.collection("users").find().toArray();
  res.status(200).json({ status: 200, data: users });
  client.close();
};

// const users = await db.collection("users").find().toArray();

// console.log("users", users);

// const excludePassword = users.map((user) => {
//   return {
//     _id: user._id,
//     fullName: user.firstName,
//     email: user.email,
//     phoneNo: user.phoneNo,
//     address: user.address,
//     restaurantOwner: user.restaurantOwner,
//     customer: user.customer,
//     admin: user.admin,
//   };
// });
// res.status(200).json({
//   status: 200,
//   data: users,
// });
// client.close();
// };

const getUserById = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const { _id } = req.params;
  const user = await db.collection("users").findOne({ _id });
  res.status(200).json({
    status: 200,
    data: {
      _id: user._id,
      fullName: user.firstName,
      email: user.email,
      phoneNo: user.phoneNo,
      address: user.address,
      restaurantOwner: user.restaurantOwner,
      customer: user.customer,
      admin: user.admin,
    },
  });
  client.close();
};
const registerUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const {
    fullName,
    password,
    email,
    phoneNo,
    address,
    restaurantOwner,
    customer,
    admin,
  } = userInfo;
  const userInfo = req.body;
  const user = await db.collection("users").insertOne(userInfo);

  res.status(200).json({ status: 200, data: user });
  client.close();
};

const loginUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("your-local");

  const { password, email } = req.body;

  const users = await db.collection("users").find().toArray();

  const identifiedUser = users.find((user) => user.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    res.status(401).json({ status: 401, message: "could not found user" });
  }
  res.status(200).json({ status: 200, data: identifiedUser });
  client.close();
};
const deleteUser = () => {};

module.exports = {
  getUserById,
  getAllUsers,
  registerUser,
  loginUser,
  //  deleteUser
};

"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getAllOrders,
  postOrder,
  getOrderById,
} = require("./routes/orderHandlers");

const {
  getUserById,
  getAllUsers,
  registerUser,
  loginUser,
  deleteUser,
} = require("./routes/loginHandlers");

const {
  getAllMenuItems,
  getMenuItemsById,
  postMenuItem,
  getMenuItemsByRestaurantId,
  updateMenuItem,
  deleteMenuItem,
} = require("./routes/menuHandlers");

const {
  getAllRestaurant,
  postRestaurant,
  getRestaurantById,
  // getRestaurantByCategory,
  updateRestaurant,
  deleteRestaurant,
} = require("./routes/restaurantHandlers");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

//
//
//Restaurant

app.get("/all-restaurants", getAllRestaurant);
app.post("/add-restaurant", postRestaurant);
app.get("/restaurant/:id", getRestaurantById);
// app.get("/restaurant/:category", getRestaurantByCategory);
app.patch("/restaurant/update/:id", updateRestaurant);
app.delete("/restaurant/delete/:id", deleteRestaurant);

// //
// //
// //Menu-Items

app.get("/menu-items", getAllMenuItems);
app.get("/menu-items/find/:id", getMenuItemsById);
app.get("/menu-items/:restaurantId", getMenuItemsByRestaurantId);
app.post("/menu-items/add", postMenuItem);
app.patch("/menu-items/update/:id", updateMenuItem);
app.delete("/menu-items/delete/:id", deleteMenuItem);

//
//
// log-in/Authentication
app.get("/users", getAllUsers);
app.get("/users/find/:id", getUserById);
app.post("/users/register", registerUser);
app.post("/users/login", loginUser);
app.delete("/users/delete/:id", deleteUser);

//
//
//Order handlers

app.get("/orders", getAllOrders);
app.get("/order/:id", getOrderById);
app.post("/order/add", postOrder);

app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

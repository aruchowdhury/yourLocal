"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
} = require("./routes/loginHandlers");

const {
  getAllMenuItems,
  getMenuItemsById,
  getMenuItemsByRestaurantId,
  postMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("./routes/menuHandlers");

const {
  getAllRestaurant,
  // getRestaurantByCategory,
  // getRestaurantById,
  postRestaurant,
  // deleteRestaurant,
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
// app.get("/api/mongo/all-restaurant/:category", getRestaurantByCategory);
// app.get("/api/mongo/all-restaurant/:id", getRestaurantById);

app.post("/add-restaurant", postRestaurant);

// app.delete("/api/mongo/all-restaurant/:id", deleteRestaurant);

// //
// //
// //Menu-Items

app.get("/menu-items", getAllMenuItems);

app.get("menu-items/:id", getMenuItemsById);

app.get("/menu-items/:restaurantId", getMenuItemsByRestaurantId);

app.post("/add-menu-item", postMenuItem);

app.patch("menu-items/:id", updateMenuItem);

app.delete("menu-items/:id", deleteMenuItem);

//
//
// log-in/Authentication
app.get("./users", getAllUsers);
app.get("./users/:id", getUserById);
app.get("./users/register", registerUser);
app.get("./users/login", loginUser);

app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

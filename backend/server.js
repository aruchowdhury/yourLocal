"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  getAllRestaurant,
  getRestaurantByCategory,
  getRestaurantById,
  postRestaurant,
  deleteRestaurant,
  getAllFoodItem,
  getAllFoodItemById,
  postMenuItem,
  updatemenuItem,
  deleteMenuItem,
} = require("./handlers");

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

// enpoints to display restaurants differently in different pages

app.get("/api/mongo/all-restaurant", getAllRestaurant);
app.get("/api/mongo/all-restaurant/:Category", getRestaurantByCategory);
app.get("/api/mongo/all-restaurant/:id", getRestaurantById);

// an endpoint to add a restaurant

app.post("/api/mongo/add-restaurant", postRestaurant);

// enpoints to delete a restaurent from application by id

app.delete("/api/mongo/all-restaurant/:id", deleteRestaurant);

//
//
//Menu-Items

//endpoint to display all food items to a restaurent menu page

app.get("/api/mongo/menu-items", getAllFoodItem);

//endpoint to display aone menu item item by id

app.get("/api/mongo/menu-items/:id", getAllFoodItemById);

// an endpoint to add/post a menu item

app.post("/api/mongo/add-menu-item", postMenuItem);

// enpoints to update a rmenu item by id

app.patch("/api/mongo/menu-items/:id", updatemenuItem);

// enpoints to delete a rmenu item by id

app.delete("/api/mongo/menu-items/:id", deleteMenuItem);

//
//
// Sign-in/Authentication

app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

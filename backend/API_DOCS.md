# yourLOCAL API docs

The yourLOCAL API is a REST API for yourLOCAL a Restaurant-management and Food-ordering web application which is the final capstone project of Concordia Web Development Bootcamp.

---

# Setup and ports

Run `yarn install` to install all dependencies for yourLOCAL.
Run `yarn start` to start the server.

The server runs on port 8000, so you can access the server at http://localhost:8000/

---

# Endpoints

Endpoints are grouped into 4 categories:

- **users** - access user data from `users` collection of `yourLOCAL` mongoDB database.
- **restaurants** - access restaurant data from `restaurants` collection of `yourLOCAL` mongoDB database.
- **menus** - access menuitem data from `menus` collection of `yourLOCAL` mongoDB database.
- **orders** - access order data from `orders` collection of `yourLOCAL` mongoDB database.

---

## Users Endpoints

These endpoints control user-specific data.

1. Used to send user data to mongoDB database.
2. Used to receive and display user data to the profile section of specific users.

This data can be found in `clusterO` > `yourLOCAL` > `users` of mongoDB database.
And user data should have this structure.

```json
[
    {
"_id": 60bc4f8d2a557509ed03c3ed,
"email": "scott@scott.com",
"fullName": "Michael Scott",
"phoneNo": "111 222 3333",
"address": "7077 Newman Blvd, Lasalle, Quebec H8N 1X1",
"password" : "*******",
"confirmPassword" : "********",
"isAdmin" : true,
"isCustomer" : false,
"isRestaurantOwner" : false
    }
]
```

### GET `/users`

Brought all user data to the application to show all users are controlled by the admin.

### GET `/users/find/:id`

This has been used to get single-user data using user ID to a user profile.

### POST `/users/resgister`

This endpoint has been used to add a new user to the database using the signup option.

### PATCH `/users/update/:id`

This endpoint has used by the admin user to update a piece of user information using a user ID from the database.

### DELETE `/restaurant/delete/:id`

This endpoint has used by the admin user to delete a piece of user information using a user ID from the database.

---

## Restaurant Endpoints

These endpoints control restaurant-specific data.

1. Used to send restaurant data to mongoDB database.
2. Used to receive and display restaurant data throughout the application.

This data can be found in `clusterO`>`yourLOCAL`>`restaurants` of mongoDB database.
And a restaurant data should have this structure.

```json
[
    {
"_id": 60bc4f8d2a557509ed03c3ed,
"name": "Bangla Cafe",
"description": "Authentic Bangladeshi food!",
"address": "7077 Newman Blvd, Lasalle, Quebec H8N 1X1",
"category" : "bangladeshi",
"type" : "Dine-in and Take-out",
"isOpen" : true,
"imgSrc": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixid=Mnwx..."
    }
]
```

### GET `/all-restaurants`

Brought all restaurant data to the application to show all restaurants.

### GET `/restaurant/:id`

This has been used to get single restaurant data using restaurant ID.

### GET `/restaurant/:category`

This has been used to get all restaurant data using the restaurant category.

### POST `/add-restaurant`

This endpoint has used by the admin user to add a new restaurant to the database.

### PATCH `/restaurant/update/:id`

This endpoint has used by the admin user to update a piece of restaurant information using restaurant ID from the database.

### DELETE `/restaurant/delete/:id`

This endpoint has used by the admin user to delete a piece of restaurant information using restaurant ID from the database.

---

## Menu-item Endpoints

These endpoints control all restaurant menu-specific data.

1. Used to send menu-item data to mongoDB database.
2. Used to receive and display menu-item data to the specific part of the application.

This data can be found in `clusterO`>`yourLOCAL`>`menus` of mongoDB database.
And a menu-item data should have this structure.

```json
[
    {
"_id": 60bc4f8d2a557509ed03c3ed,
"name": "Muffin",
"description": "Good Muffin",
"restaurantName" : "Bangla Cafe",
"restaurantId": 60bc4f8d2a557509ed03c3ed,
"userId": 60c0d77cd469310803d9216c,
"price": 14.99,
"imgSrc": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixid=Mnwx..."
    }
]
```

### GET `/menu-items`

Brought all menu-item data to the application to show all menu items.

### GET `/menu-items/:id`

This has been used to get single menu-item data using menu-item ID.

### GET `/menu-items/:restaurantId`

This has been used to get all menu-item data using the restaurant ID to which this menu item belongs.

### POST `/menu-items`

This endpoint has used by a restaurant-owner user to add a new menu item to the database.

### PATCH `/menu-items/update/:id`

This endpoint has used by a restaurant-owner user to update a piece of menu-item information using menu-item ID from the database.

### DELETE `/menu-items/delete/:id`

This endpoint has used by a restaurant-owner user to delete a piece of menu-item information using menu-item ID from the database.

---

## Orders Endpoints

These endpoints control all order-specific data.

1. Used to send order data to mongoDB database.
2. Used to receive and display order data to the specific part of the application.

This data can be found in `clusterO`>`yourLOCAL`>`orders` of mongoDB database.
And order data should have this structure.

```json
[
    {
"_id": 60c7039f3a382497d6d2d42b,
"orderArray": [
{
"name" : "Margarita pizza",
"quantity": 1,
"price": 14.99,
}, {
"name": "Vegetarian pizza",
"quantity": 1,
"price":14.99,
}
]
"orderedBy" :60c62f66f3cd3263dc54df51
    }
]

```

### GET `/orders`

Brought all order data to the application to show all orders.

### GET `/order/:id`

This has been used to get single order data using order ID to show it to a customer profile.

### POST `/order/add`

This endpoint has used by customer users to add a new order to the database.

### DELETE `/order/delete/:id`

This endpoint has used by customer users to delete a piece of older order information using order ID from the database.

---

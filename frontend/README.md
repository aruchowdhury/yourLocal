# yourLOCAL a Restaurant-management and Food-ordering web application.

The your LOCAL is a Restaurant-management and Food-ordering react web application which provides services to restaurant owners and customers.

Demo video:

Technologies used: HTML, CSS, JavaScript, React, Styled-components, Node, Express, MongoDB, React-Icons and axios.

### Setup and ports

Run `yarn install` to install all dependencies for yourLOCAL.
Run `yarn start` to start the the application.

The application runs on port 3000, so you can view it in browser at http://localhost:3000/

### Features

This is a mobile responsive web based Restaurant-management and Food-ordering react application which brings all local small restaurant owners in one place so that any customer can find them all in one place and order from desired restaurent.

### Becoming a restaurant Owner

1. To become a restaurent owner at yourLOCAL physical resturant owner have to contact yourLOCAL admin via contact form at http://localhost:3000/contact .
2. Based of information and discussion with restaurant owner yourLOCAL admin creates a restaurant in yourLOCAL and send the restaurant name and ID to restaurant owner.
3. Using that restaurant name and ID restaurant owner resgister her/him self as restaurant owner at yourLOCAL then login to manage his restaurant in yourLOCAL.
4. Inside restaurant owner profile a owner can create, update and delete menu items by her/him self.

### Place an order and register as a customer

1. A customer come to your local and nevigate to desired restaurant menu page and add food items to cart.
2. A customer dont have to be registered to checkout.
3. Upon successfull checking out customer receives a success message and order id for future reference.
4. But if customer register to creates a pfofile and order as loged in user she/he will be able to view previous order details and ID in addition to getting only a success message as a unregistered user.

### your LOCAL admin user authority

1. Admin user has full control over the yourLOCAL web application. Admin can add, update and delete a user also can add, update and delete a restaurant.

### Features makes this application interesting:

1. After login every user will see different profile page. All 3 parties (admin, restaurant owner, customer) will see their own version of customized profile page and its dynamic.

2. Admin user has full control on managing restaurents and users. Admin can add delete and update restaurents and users.

3. Alike admin user a restaurent owner user has full control over adding, updating and deleting menu items on her/his restaurant.

4. All data flowing over the application are dynamic and interlinked, and updates are realtime using mongoDB database.

### Disclaimers

1. This application focuses on displaying interaction between 3 parties (admin, restaurant owner, customer) and managing data in a dynamic way.
2. This does not focues on detailed order management system and purchase food with various option because of short deadline of project submission.

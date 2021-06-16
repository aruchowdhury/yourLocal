import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./NavComponents/Navbar";
import Contact from "./Contact";
import AllRestaurents from "./RestaurantComponents/AllRestaurents";
import About from "./About";
import Home from "./Home";
import Footer from "./FooterComponent/Footer";
import CustomerProfile from "./ProfileComponents/CustomerProfile";
import AdminProfile from "./ProfileComponents/AdminProfile";
import RestaurantOwnerProfile from "./ProfileComponents/RestaurantOwnerProfile";
import RestaurantMenu from "./RestaurantComponents/RestaurantMenu";
import SignIn from "./LoginComponents/SignIn";
import CustomerSignUp from "./LoginComponents/CustomerSignUp";
import RestaurantOwnerSignUp from "./LoginComponents/RestaurantOwnerSignUp";
import Cart from "./CartComponents/Cart";
import SuccessPage from "./CartComponents/SuccessPage";
import { SignInContext } from "./LoginComponents/SignInContext";
import UserControl from "./ProfileComponents/UserControl";
import UserUpdate from "./ProfileComponents/UserUpdate";
import MenuUpdate from "./ProfileComponents/MenuUpdate";
import MenuControl from "./ProfileComponents/MenuControl";
import RestaurantControl from "./ProfileComponents/RestaurantControl";
import RestaurantUpdate from "./ProfileComponents/RestaurantUpdate";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(SignInContext);

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("currentUser");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setCurrentUser(foundUser);
  //   }
  // }, []);

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/restaurants">
            <AllRestaurents />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/customer-profile">
            <CustomerProfile />
          </Route>
          {currentUser.isAdmin && (
            <Route exact path="/admin-profile">
              <AdminProfile />
            </Route>
          )}
          <Route exact path="/admin-profile/user-control">
            <UserControl />
          </Route>
          <Route exact path="/admin-profile/restaurant-control">
            <RestaurantControl />
          </Route>
          <Route exact path="/restaurant-owner-profile">
            <RestaurantOwnerProfile />
          </Route>
          <Route
            exact
            path="/restaurant-owner-profile/menu-control/resto/:restoid"
          >
            <MenuControl />
          </Route>
          <Route exact path="/signup/customer">
            <CustomerSignUp />
          </Route>
          <Route exact path="/signup/restaurant-owner">
            <RestaurantOwnerSignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/order/cart">
            <Cart />
          </Route>
          <Route exact path="/restaurant-owner-profile/menu-control/update/:id">
            <MenuUpdate />
          </Route>

          <Route exact path="/admin-profile/restaurant-control/update/:id">
            <RestaurantUpdate />
          </Route>
          <Route exact path="/admin-profile/user-control/update/:id">
            <UserUpdate />
          </Route>
          <Route exact path="/order/success/:id">
            <SuccessPage />
          </Route>
          <Route exact path="/restaurants/:category/:restaurantId">
            <RestaurantMenu />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
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
import SignUp from "./LoginComponents/SignUp";
import Cart from "./CartComponents/Cart";
import SuccessPage from "./CartComponents/SuccessPage";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // const restaurantArray = Object.values(data);
        console.log(json.data);
        setAllUsers(json.data);
      });
  }, []);
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
            <CustomerProfile currentUser={currentUser} />
          </Route>
          {/* {currentUser.type === "admin" ?  */}
          <Route exact path="/admin-profile">
            <AdminProfile currentUser={currentUser} />
          </Route>
          {/* : ""} */}
          <Route exact path="/restaurant-owner-profile">
            <RestaurantOwnerProfile currentUser={currentUser} />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn allUsers={allUsers} setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/order/cart">
            <Cart />
          </Route>
          <Route exact path="/order/success">
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

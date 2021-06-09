import React from "react";
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

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
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
            <Route exact path="/admin-profile">
              <AdminProfile />
            </Route>
            <Route exact path="/restaurant-owner-profile">
              <RestaurantOwnerProfile />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/restaurants/:category/:restaurantId">
              <RestaurantMenu />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div``;

export default App;

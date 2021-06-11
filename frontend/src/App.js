import React, { useContext } from "react";
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
import SignUp from "./LoginComponents/SignUp";
import Cart from "./CartComponents/Cart";
import SuccessPage from "./CartComponents/SuccessPage";
import { SignInContext } from "./LoginComponents/SignInContext";
import UserControl from "./ProfileComponents/UserControl";

const App = () => {
  const { currentUser } = useContext(SignInContext);

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
          {currentUser.isAdmin ? (
            <Route exact path="/admin-profile">
              <AdminProfile />
            </Route>
          ) : (
            <Route exact path="/signin">
              <SignIn />
            </Route>
          )}
          <Route exact path="/admin-profile/user-control">
            <UserControl />
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

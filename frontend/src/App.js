import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./NavComponents/Navbar";
import Contact from "./Contact";
// import SignIn from "./SignInComponents/SignIn";
import Restaurents from "./Restaurents";
import About from "./About";
import Home from "./Home";
import SignIn from "./SignInComponents/SignIn";
import SignUp from "./SignInComponents/SignUp";
import Footer from "./FooterComponent/Footer";
import CustomerProfile from "./CustomerProfile";

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
              <Restaurents />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/profile">
              <CustomerProfile />
            </Route>
            {/* <Route exact path="/signin">
              <SignIn />
            </Route> */}
          </Switch>
          <Footer />
        </Wrapper>
        <SignIn />
        <SignUp />
      </Router>
    </>
  );
};

const Wrapper = styled.div``;

export default App;

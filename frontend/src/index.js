import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartComponents/CartContext";
import { SignInProvider } from "./LoginComponents/SignInContext";
import { RestaurantProvider } from "./RestaurantComponents/RestaurantContext";

ReactDOM.render(
  <RestaurantProvider>
    <SignInProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SignInProvider>
  </RestaurantProvider>,

  document.getElementById("root")
);

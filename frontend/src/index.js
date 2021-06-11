import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartComponents/CartContext";
import { SignInProvider } from "./LoginComponents/SignInContext";
ReactDOM.render(
  <SignInProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </SignInProvider>,

  document.getElementById("root")
);

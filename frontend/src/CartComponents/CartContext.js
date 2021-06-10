import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const itemExist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemExist) {
      //console.log("item", item);

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const onRemove = (item) => {
    const itemExist = cartItems.find((cartItem) => cartItem._id === item._id);
    if (itemExist.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...itemExist, quantity: itemExist.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const RestaurantContext = createContext(null);

export const RestaurantProvider = ({ children }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [menuChange, setMenuChange] = useState(false);
  const [restaurantChange, setRestaurantChange] = useState(false);

  return (
    <RestaurantContext.Provider
      value={{
        menuItems,
        setMenuItems,
        allRestaurants,
        setAllRestaurants,
        menuChange,
        setMenuChange,
        restaurantChange,
        setRestaurantChange,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

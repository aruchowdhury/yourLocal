import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  console.log("restaurantId", restaurantId);
  useEffect(() => {
    fetch(`/menu-items/${restaurantId}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setMenuItems(json.data);
        console.log("json", json);
      });
  }, []);

  console.log("menuitems", menuItems);

  return (
    <MenuGrid>
      {menuItems.map((item) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </MenuGrid>
  );
};

const MenuGrid = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

export default RestaurantMenu;
import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import MenuItem from "./MenuItem";
import { RestaurantContext } from "./RestaurantContext";

const RestaurantMenu = () => {
  const { menuItems, setMenuItems } = useContext(RestaurantContext);

  const { restaurantId } = useParams();

  //console.log("restaurantId", restaurantId);

  useEffect(() => {
    fetch(`/menu-items/${restaurantId}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setMenuItems(json.data);
        console.log("json", json);
      });
  }, []);

  //console.log("menuitems", menuItems);

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
  grid-template-columns: 17rem 17rem 17rem 17rem;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;

  @media (max-width: 675px) {
    grid-template-columns: 18rem;
  }
`;

export default RestaurantMenu;

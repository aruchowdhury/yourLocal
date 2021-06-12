import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import { useParams } from "react-router";

const MenuControl = () => {
  const { menuItems, setMenuItems, menuItemChange, setMenuItemChange } =
    useContext(RestaurantContext);
  const history = useHistory();
  const { restaurantId } = useParams();

  console.log("restaurant id from menu control", restaurantId);

  useEffect(() => {
    fetch(`/menu-items`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from user control", json.data);
        setMenuItems(json.data);
      });
  }, [menuItemChange]);

  console.log("menuItems from menu control", menuItems);

  const handleClickDelete = (e, id) => {
    e.preventDefault();

    fetch(`/menu-items/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMenuItemChange(!menuItemChange));
  };

  const handleClickUpdate = (e, id) => {
    history.push(`/restaurant-owner-profile/user-control/update/${id}`);
  };

  return (
    <UserGrid>
      {menuItems.length > 0
        ? menuItems.map((item) => {
            return (
              <MenuItem key={item._id}>
                <div>Name: {item.name}</div>
                <div>Description:{item.description}</div>
                <div>Price:{item.price}</div>

                <button
                  onClick={(e) => {
                    handleClickDelete(e, item._id);
                  }}
                >
                  Delete menu item
                </button>
                <button
                  onClick={(e) => {
                    handleClickUpdate(e, item._id);
                  }}
                >
                  Update menu item
                </button>
              </MenuItem>
            );
          })
        : ""}
    </UserGrid>
  );
};

const UserGrid = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  align-content: left;
`;

export default MenuControl;

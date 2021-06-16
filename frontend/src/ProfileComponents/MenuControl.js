import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import { useParams } from "react-router";
import { COLORS } from "../Constants";

const MenuControl = () => {
  const { menuItems, setMenuItems, menuItemChange, setMenuItemChange } =
    useContext(RestaurantContext);
  const history = useHistory();
  const { restoid } = useParams();

  //console.log("restaurant id from menu control", restoid);

  useEffect(() => {
    fetch(`/menu-items/${restoid}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from user control", json.data);
        setMenuItems(json.data);
      });
  }, [menuItemChange]);

  //console.log("menuItems from menu control", menuItems);

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
    history.push(`/restaurant-owner-profile/menu-control/update/${id}`);
  };

  return (
    <Grid>
      {menuItems.length > 0
        ? menuItems.map((item) => {
            return (
              <MenuItem key={item._id}>
                <div>Name: {item.name}</div>
                <div>Description: {item.description}</div>
                <div>Price: {item.price}</div>

                <Button
                  onClick={(e) => {
                    handleClickDelete(e, item._id);
                  }}
                >
                  Delete menu item
                </Button>
                <Button
                  onClick={(e) => {
                    handleClickUpdate(e, item._id);
                  }}
                >
                  Update menu item
                </Button>
              </MenuItem>
            );
          })
        : ""}
    </Grid>
  );
};

const Grid = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 25rem 25rem 25rem;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const MenuItem = styled.div`
  padding: 1rem;
  width: 25rem;
  height: 10rem;
  border: none;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: ${COLORS.secondary};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 1.6rem;
  border: none;
  border-radius: 0.3rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  &:hover {
    border: 0.1rem solid ${COLORS.primary};
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;

export default MenuControl;

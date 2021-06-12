import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const MenuUpdate = () => {
  const { menuItems, setMenuItems, menuItemChange, setMenuItemChange } =
    useContext(RestaurantContext);

  const [menu, setMenu] = useState({});
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  const { id } = useParams();
  const history = useHistory();

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMenu();
  };

  const updateMenu = () => {
    fetch(`/menu-items/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: menu.name, address: menu.address }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.id);
        setMenuItemChange(!menuItemChange);
        setMenuItems(data);
        console.log("data from patch", data);
        history.push("/restaurant-owner-profile/menu-control");
      });
  };

  return (
    <UserGrid>
      <form>
        <label> Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={handleInputChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          defaultValue={address}
          onChange={handleInputChange}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
        <button>Cancel</button>
      </form>
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

export default MenuUpdate;

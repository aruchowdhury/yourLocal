import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { COLORS } from "../Constants";

const MenuUpdate = () => {
  const { setMenuItems, menuItemChange, setMenuItemChange } =
    useContext(RestaurantContext);
  const { id } = useParams();
  const history = useHistory();

  const [menu, setMenu] = useState({});
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

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
      body: JSON.stringify({
        name: menu.name,
        description: menu.description,
        price: menu.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.id);
        setMenuItemChange(!menuItemChange);
        setMenuItems(data);
        //console.log("data from patch", data);
        history.push(`/restaurant-owner-profile`);
      });
  };

  return (
    <MenuItemGrid>
      <h1>Input updated information below:</h1>
      <UpdateForm>
        <InputDivWrapper>
          <label> Name:</label>
          <Input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleInputChange}
            placeholder="new name"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Description:</label>
          <Input
            type="text"
            name="description"
            defaultValue={description}
            onChange={handleInputChange}
            placeholder="new description"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Price:</label>
          <Input
            type="number"
            name="price"
            defaultValue={price}
            onChange={handleInputChange}
            placeholder="new price"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <button style={{ opacity: "0" }}>Cancel</button>
          <Button
            type="submit"
            // onClick={(e) => {
            //   handleSubmit(e);
            // }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </InputDivWrapper>
      </UpdateForm>
    </MenuItemGrid>
  );
};

const MenuItemGrid = styled.div`
  margin: 5% 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  align-content: center;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 1rem;

  h1 {
    font-size: 1.5rem;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    margin: 5% 1.5%;
  }
`;

const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 21rem;
  height: 2.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.background};
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  height: 2.6rem;
  width: 20.9rem;
  margin: 0.5rem 0 0 9.6rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0 0 0;
  }
`;
const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  label {
    margin-right: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      margin: 0 0;
    }
  }
`;

export default MenuUpdate;

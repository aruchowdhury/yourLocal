import React, { useState, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import axios from "axios";
import { SignInContext } from "../LoginComponents/SignInContext";
import { Link } from "react-router-dom";

const RestaurantOwnerProfile = () => {
  const { allUsers, currentUser, setCurrentUser, setAllUsers } =
    useContext(SignInContext);

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: Number,
  });

  //get menu items

  // post/create menu items
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log("user registered now", input);
    const newMenuItem = {
      name: input.name,
      description: input.description,
      price: input.price,
    };

    axios.post("/menu-items/add", newMenuItem);
    setInput({
      name: "",
      description: "",
      price: Number,
    });
  };

  return (
    <Grid>
      <ProfileInfo>
        <h1>Hello, {currentUser.fullName}! </h1>
        {currentUser.isAdmin ? (
          <h2>Welcome to Admin Pannel!</h2>
        ) : currentUser.isRestaurantOwner ? (
          <h2>Welcome to restaurant owner profile!</h2>
        ) : (
          <h2>Welcome to customer profile!</h2>
        )}
        <h2>Name: {currentUser.fullName}</h2>
        <h2>Address: {currentUser.address}</h2>
        <h2>Phone Number: {currentUser.phoneNo}</h2>
      </ProfileInfo>

      <UpdateItem>
        <Link
          to={`/restaurant-owner-profile/menu-control/${currentUser.restaurantId}`}
        >
          <MenuUpdateBtn>Update/Menu Items</MenuUpdateBtn>
        </Link>
      </UpdateItem>
      <AddItem>
        <h2>Add New Menu Items</h2>
        <form>
          <div>
            <label>Item Name:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="name"
              value={input.name}
              placeholder="item Name"
              required
            />
          </div>

          <div>
            <label>Description:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="description"
              value={input.description}
              placeholder="description"
              required
            />
          </div>

          {/* <div>
            <label>Meal Type:</label>
            <br />
            <select name="mealTypes" onChange={onChange}>
              <option value="breakfast">Bangladeshi</option>
              <option value="lunch">Italian</option>
              <option value="dinner">Japanese</option>
              <option value="side">Montreal-born</option>
            </select>
          </div> */}

          <div>
            <label>Price:</label>
            <br />
            <Input
              onChange={onChange}
              type="number"
              name="price"
              value={input.price}
              placeholder="price"
              required
            />
          </div>

          <div>
            <Button onClick={onClick}>Update</Button>
          </div>
        </form>
      </AddItem>
    </Grid>
  );
};

const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
  grid-row: 1/3;
`;
// const OtherInfo = styled.div`
//   display: grid;
//   grid-template-rows: 35% 65%;
//   justify-content: center;
//   align-items: center;
//   grid-gap: 1rem;
//   background: ${COLORS.secondary};
// `;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
`;
const AddItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
`;

const Input = styled.input`
  width: 17rem;
  padding: 0.4rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
`;

const Button = styled.button`
  height: 2.1rem;
  width: 5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
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
  }
`;

const MenuUpdateBtn = styled.button`
  height: 4rem;
  width: 10rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
  }
`;

export default RestaurantOwnerProfile;

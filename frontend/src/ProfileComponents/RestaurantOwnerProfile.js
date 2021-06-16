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
    restaurantName: "",
    restaurantId: "",
    userId: "",
    price: Number,
    imgSrc: "",
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
    //console.log("user registered now", input);
    const newMenuItem = {
      name: input.name,
      description: input.description,
      restaurantName: input.restaurantName,
      restaurantId: input.restaurantId,
      userId: input.userId,
      price: input.price,
      imgSrc: input.imgSrc,
    };

    axios.post("/menu-items/add", newMenuItem);
    setInput({
      name: "",
      description: "",
      restaurantName: "",
      restaurantId: "",
      userId: "",
      price: Number,
      imgSrc: "",
    });
  };

  return (
    <Grid>
      <ProfileInfo>
        <h1>Hello, {currentUser.fullName}! </h1>
        <ProfileHeading>
          {currentUser.isAdmin ? (
            <h2>Welcome to Admin Pannel.</h2>
          ) : currentUser.isRestaurantOwner ? (
            <h2>Welcome to restaurant owner profile Management.</h2>
          ) : (
            <h2>Welcome to customer profile Management.</h2>
          )}
        </ProfileHeading>
        <ProfileHeading>
          <Span>Name:</Span> <span>{currentUser.fullName}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Your User ID: </Span>
          <span>{currentUser._id}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Address:</Span> <span>{currentUser.address}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Phone No:</Span> <span>{currentUser.phoneNo}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Restaurant Name:</Span>{" "}
          <span>{currentUser.restaurantName}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Your Restaurant ID: </Span>
          <span>{currentUser.restaurantId}</span>
        </ProfileHeading>
      </ProfileInfo>

      <UpdateItem>
        <Link
          to={`/restaurant-owner-profile/menu-control/resto/${currentUser.restaurantId}`}
        >
          <MenuUpdateBtn>Update/Delete Menu Items</MenuUpdateBtn>
        </Link>
      </UpdateItem>
      <AddItem>
        <h1>Add New Menu Items:</h1>
        <form>
          <InputDivWrapper>
            <label>Item Name:</label>
            <Input
              onChange={onChange}
              type="text"
              name="name"
              value={input.name}
              placeholder="menu item name"
              required
            />
          </InputDivWrapper>

          <InputDivWrapper>
            <label>Description:</label>
            <Input
              onChange={onChange}
              type="text"
              name="description"
              value={input.description}
              placeholder="description"
              required
            />
          </InputDivWrapper>
          <InputDivWrapper>
            <label>Restaurant Name:</label>
            <Input
              onChange={onChange}
              type="text"
              name="restaurantName"
              value={input.restaurantName}
              placeholder="restaurant name"
              required
            />
          </InputDivWrapper>
          <InputDivWrapper>
            <label>Restaurant ID:</label>
            <Input
              onChange={onChange}
              type="text"
              name="restaurantId"
              value={input.restaurantId}
              placeholder="restaurant ID"
              required
            />
          </InputDivWrapper>
          <InputDivWrapper>
            <label>User ID:</label>
            <Input
              onChange={onChange}
              type="text"
              name="userId"
              value={input.userId}
              placeholder="user ID"
              required
            />
          </InputDivWrapper>

          {/* <InputDivWrapper>
            <label>Meal Type:</label>
            <br />
            <select name="mealTypes" onChange={onChange}>
              <option value="breakfast">Bangladeshi</option>
              <option value="lunch">Italian</option>
              <option value="dinner">Japanese</option>
              <option value="side">Montreal-born</option>
            </select>
          </InputDivWrapper> */}

          <InputDivWrapper>
            <label>Price:</label>
            <Input
              onChange={onChange}
              type="number"
              name="price"
              value={input.price}
              placeholder="price"
              required
            />
          </InputDivWrapper>
          <InputDivWrapper>
            <label>Image:</label>
            <Input
              onChange={onChange}
              type="text"
              name="imgSrc"
              value={input.imgSrc}
              placeholder="image source"
              required
            />
          </InputDivWrapper>

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
  grid-template-columns: 1.3fr 2fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 2rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
  grid-row: 1/3;
  h1 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.2rem 0;
  }
  h2 {
    font-size: 1.1rem;
    margin: 0 0 0.8rem 0;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
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
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
`;
const AddItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 1rem 2rem;
  background: ${COLORS.secondary};
  h1 {
    padding: 1rem 0;
    font-size: 1.2rem;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
`;

const Input = styled.input`
  width: 25rem;
  height: 2rem;
  background: ${COLORS.background};
  padding: 0.4rem;
  border-radius: 0.3rem;
  margin: 0.2rem 10rem 0.2rem 0;
  border: none;
  @media (max-width: 600px) {
    width: 16.5rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  width: 25rem;
  margin: 0.5rem 10rem 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  float: right;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 16.5rem;
    margin: 0.5rem 5rem 0 0;
  }
`;

const MenuUpdateBtn = styled.button`
  height: 4rem;
  width: 25rem;
  margin: 0.5rem 10rem 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  font-size: 1.5rem;
  float: right;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 16.5rem;
  }
`;

const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Span = styled.span`
  font-style: italic;
`;

const ProfileHeading = styled.h2`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  span {
    width: 10rem;
    margin-right: 4rem;
  }
`;
export default RestaurantOwnerProfile;

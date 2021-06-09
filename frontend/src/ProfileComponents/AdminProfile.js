import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminProfile = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    address: "",
    category: "",
    type: "",
  });

  // post/create restaurant
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

    const newRestaurant = {
      name: input.name,
      description: input.description,
      address: input.address,
      category: input.category,
      type: input.type,
    };

    axios.post("/add-restaurant", newRestaurant);
    setInput({
      name: "",
      description: "",
      address: "",
      category: "",
      type: "",
    });
  };

  return (
    <Grid>
      <ProfileInfo>
        <h2>Hello, </h2>
      </ProfileInfo>

      <UpdateItem>
        <Link to="/admin-profile/user-control">
          <UserControlBtn>User Control </UserControlBtn>
        </Link>
      </UpdateItem>
      <AddItem>
        <h2>Add New Restaurant</h2>
        <form>
          <div>
            <label>Name:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="name"
              value={input.name}
              placeholder="restaurant name"
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

          <div>
            <label>Address:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="address"
              value={input.address}
              placeholder="address"
              required
            />
          </div>

          <div>
            <label>Category:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="category"
              value={input.category}
              placeholder="category"
              required
            />
          </div>

          <div>
            <label>Type:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="type"
              value={input.type}
              placeholder="type"
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

const UserControlBtn = styled.button`
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
export default AdminProfile;

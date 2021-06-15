import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import axios from "axios";

const RestaurantAddition = () => {
  // add restaurant

  const [input, setInput] = useState({
    name: "",
    description: "",
    address: "",
    category: "",
    type: "",
    imgSrc: "",
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
      imgSrc: input.imgSrc,
    };

    axios.post("/add-restaurant", newRestaurant);
    setInput({
      name: "",
      description: "",
      address: "",
      category: "",
      type: "",
      imgSrc: "",
    });
  };

  //update or delete restaurant

  //   <select onChange={onChange} name="type" id="type">
  //   <option value="Italian">Italian</option>
  //   <option value="Bangladeshi">Bangladeshi</option>
  //   <option value="Japanese">Japanese</option>
  //   <option value="Montreal-born">Montreal-born</option>
  // </select>

  return (
    <Grid>
      <ProfileInfo>
        <InputDivWrapper>
          <h1>Add New Restaurant:</h1>
        </InputDivWrapper>
        <form>
          <InputDivWrapper>
            <label>Name:</label>
            <Input
              onChange={onChange}
              type="text"
              name="name"
              value={input.name}
              placeholder="restaurant name"
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
            <label>Address:</label>
            <Input
              onChange={onChange}
              type="text"
              name="address"
              value={input.address}
              placeholder="address"
              required
            />
          </InputDivWrapper>

          <InputDivWrapper>
            <label>Category:</label>
            <Input
              onChange={onChange}
              type="text"
              name="category"
              value={input.category}
              placeholder="category"
              required
            />
          </InputDivWrapper>

          <InputDivWrapper>
            <label>Type:</label>
            <Input
              onChange={onChange}
              type="text"
              name="type"
              value={input.type}
              placeholder="type"
              required
            />
          </InputDivWrapper>
          <InputDivWrapper>
            <label>Image Source:</label>
            <Input
              onChange={onChange}
              type="text"
              name="imgSrc"
              value={input.imgSrc}
              placeholder="ImgSrc"
              required
            />
          </InputDivWrapper>

          <InputDivWrapper>
            <button style={{ opacity: "0" }}></button>
            <Button onClick={onClick}>Update</Button>
          </InputDivWrapper>
        </form>
      </ProfileInfo>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
    justify-content: space-evenly;
    justify-items: center;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 1rem;
  background: ${COLORS.secondary};
  grid-row: 1/3;

  h1 {
    padding: 0 0 1rem 0;
  }
  @media (max-width: 600px) {
    h1 {
      padding: 0 0 1rem 0;
    }
  }
`;

const Input = styled.input`
  width: 17rem;
  height: 2.2rem;
  padding: 0.4rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  background: ${COLORS.background};
  border: none;
  @media (max-width: 600px) {
    width: 14rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  height: 2.2rem;
  width: 16.7rem;
  margin: 0.5rem 0.5rem 0.5rem 8.7rem;
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
    width: 14rem;
    margin: 0.5rem 0 0 0;
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
export default RestaurantAddition;

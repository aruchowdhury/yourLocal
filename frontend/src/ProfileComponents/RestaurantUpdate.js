import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { COLORS } from "../Constants";

const RestaurantUpdate = () => {
  const {
    allRestaurants,
    setAllRestaurants,
    restaurantChange,
    setRestaurantChange,
  } = useContext(RestaurantContext);
  const history = useHistory();
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [type, setType] = useState();

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRestaurant();
  };

  const updateRestaurant = () => {
    fetch(`/restaurant/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: restaurant.name,
        address: restaurant.address,
        category: restaurant.category,
        type: restaurant.type,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data.id);
        setRestaurantChange(!restaurantChange);
        setAllRestaurants(data);
        //console.log("data from patch", data);
        history.push("/admin-profile/restaurant-control");
      });
  };

  return (
    <RestaurantGrid>
      <UpdateForm>
        <InputDivWrapper>
          <label>Name:</label>
          <Input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleInputChange}
            placeholder="new restaurant name"
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
          <label>Category:</label>
          <Input
            type="text"
            name="category"
            defaultValue={category}
            onChange={handleInputChange}
            placeholder="new category"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Type:</label>
          <Input
            type="text"
            name="type"
            defaultValue={type}
            onChange={handleInputChange}
            placeholder="new type"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <button style={{ opacity: "0" }}>Cancel</button>
          <Button type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </InputDivWrapper>
      </UpdateForm>
    </RestaurantGrid>
  );
};

const RestaurantGrid = styled.div`
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
  background: ${COLORS.background}; ;
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
`;

export default RestaurantUpdate;

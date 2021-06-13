import React, { useContext, useState } from "react";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data.id);
        setRestaurantChange(!restaurantChange);
        setAllRestaurants(data);
        console.log("data from patch", data);
        // history.push("/admin-profile/user-control");
      });
  };

  return (
    <UserGrid>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          defaultValue={description}
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

export default RestaurantUpdate;

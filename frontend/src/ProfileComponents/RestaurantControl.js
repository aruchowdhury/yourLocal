import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import { useHistory } from "react-router-dom";

const RestaurantControl = () => {
  // add restaurant

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

  //update or delete restaurant

  const {
    allRestaurants,
    setAllRestaurants,
    restaurantChange,
    setRestaurantChange,
  } = useContext(RestaurantContext);

  console.log("all restaurants at admin profile page", allRestaurants);

  // console.log("all users from user control", allUsers);
  const history = useHistory();

  useEffect(() => {
    fetch("/all-restaurants", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from restaurant control", json.data);
        setAllRestaurants(json.data);
      });
  }, [restaurantChange]);

  const handleClickDelete = (e, id) => {
    e.preventDefault();

    fetch(`/restaurant/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRestaurantChange(!restaurantChange));
  };

  const handleClickUpdate = (e, id) => {
    history.push(`/admin-profile/restaurant-control/update/${id}`);
  };

  return (
    <Grid>
      <ProfileInfo>
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
      </ProfileInfo>
      <UpdateItem>
        {allRestaurants.length > 0
          ? allRestaurants.map((restaurant) => {
              return (
                <SingleUser key={restaurant._id}>
                  <div>Name: {restaurant.name}</div>
                  <div>Description:{restaurant.description}</div>
                  <div>Category:{restaurant.category}</div>
                  <div>Type: {restaurant.type}</div>

                  <button
                    onClick={(e) => {
                      handleClickDelete(e, restaurant._id);
                    }}
                  >
                    Delete restaurant
                  </button>
                  <button
                    onClick={(e) => {
                      handleClickUpdate(e, restaurant._id);
                    }}
                  >
                    Update restaurant
                  </button>
                </SingleUser>
              );
            })
          : ""}
      </UpdateItem>
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
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
  grid-row: 1/3;
`;

const UpdateItem = styled.div`
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

const SingleUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  align-content: left;
`;

export default RestaurantControl;

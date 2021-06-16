import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { RestaurantContext } from "../RestaurantComponents/RestaurantContext";
import { useHistory } from "react-router-dom";
import RestaurantAddition from "./RestaurantAddition";

const RestaurantControl = () => {
  //update or delete restaurant

  const {
    allRestaurants,
    setAllRestaurants,
    restaurantChange,
    setRestaurantChange,
  } = useContext(RestaurantContext);

  //console.log("all restaurants at admin profile page", allRestaurants);

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
        <RestaurantAddition />
      </ProfileInfo>
      <UpdateRestaurant>
        {allRestaurants.length > 0
          ? allRestaurants.map((restaurant) => {
              return (
                <SingleRestaurant key={restaurant._id}>
                  <div>Name: {restaurant.name}</div>
                  <div>Description:{restaurant.description}</div>
                  <div>Category:{restaurant.category}</div>
                  <div>Type: {restaurant.type}</div>
                  <div>Restaurant ID: {restaurant._id}</div>

                  <Button
                    onClick={(e) => {
                      handleClickDelete(e, restaurant._id);
                    }}
                  >
                    Delete restaurant
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleClickUpdate(e, restaurant._id);
                    }}
                  >
                    Update restaurant
                  </Button>
                </SingleRestaurant>
              );
            })
          : ""}
      </UpdateRestaurant>
    </Grid>
  );
};

const SingleRestaurant = styled.div`
  padding: 1rem;
  width: 25rem;
  height: 12rem;
  border: none;
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
  color: ${COLORS.secondary};
  cursor: pointer;
  &:hover {
    border: 0.1rem solid ${COLORS.primary};
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;
const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
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

const UpdateRestaurant = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 25rem 25rem;
  justify-content: center;
  align-items: center;
  grid-gap: 1.2rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

export default RestaurantControl;

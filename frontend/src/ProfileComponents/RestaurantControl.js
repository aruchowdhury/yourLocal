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
        <RestaurantAddition />
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
                  <div>Type: {restaurant._id}</div>

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

const SingleUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  align-content: left;
`;

export default RestaurantControl;

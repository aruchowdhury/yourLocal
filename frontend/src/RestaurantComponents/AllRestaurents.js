import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import Restaurant from "./Restaurant";
import { RestaurantContext } from "./RestaurantContext";

const AllRestaurents = () => {
  const { allRestaurants, setAllRestaurants } = useContext(RestaurantContext);

  useEffect(() => {
    fetch("/all-restaurants", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // const restaurantArray = Object.values(data);
        setAllRestaurants(json.data);

        // console.log("allRestaurants", Object.values(data));
      });
  }, []);
  console.log("data", allRestaurants);
  return (
    <RestaurantGrid>
      {allRestaurants.map((restaurant) => {
        return <Restaurant key={restaurant._id} restaurant={restaurant} />;
      })}
    </RestaurantGrid>
  );
};

const RestaurantGrid = styled.div`
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 27.5rem 25.5rem;
  justify-content: center;
  align-items: center;
  grid-gap: 1.8rem;

  @media (max-width: 600px) {
    grid-template-columns: 20rem;
    margin: 0 0 0 0;
  }
`;

export default AllRestaurents;

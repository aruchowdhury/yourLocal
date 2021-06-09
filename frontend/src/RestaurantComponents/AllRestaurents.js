import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";

const AllRestaurents = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

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
  grid-template-columns: 27rem 27rem;
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;

  @media (max-width: 675px) {
    grid-template-columns: 27rem;
  }
`;

export default AllRestaurents;

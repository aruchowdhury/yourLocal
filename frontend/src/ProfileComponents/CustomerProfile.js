import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { SignInContext } from "../LoginComponents/SignInContext";

const CustomerProfile = () => {
  const { currentUser } = useContext(SignInContext);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch("/orders", { method: "GET" })
      .then((res) => res.json())
      .then((json) =>
        setMyOrders(
          json.data.filter((order) => order.orderedBy === currentUser._id)
        )
      );
  }, []);
  console.log("these are my orders", myOrders);
  return (
    <Grid>
      <ProfileInfo>
        <h1>Hello, {currentUser.fullName}! </h1>
        <h2>User ID: {currentUser._id}</h2>
        {currentUser.isAdmin ? (
          <h2>Welcome to Admin Pannel!</h2>
        ) : currentUser.isRestaurantOwner ? (
          <h2>Welcome to restaurant owner profile!</h2>
        ) : (
          <h2>Welcome to customer profile!</h2>
        )}
        <h2>Name: {currentUser.fullName}</h2>
        <h2>Address: {currentUser.address}</h2>
        <h2>Phone Number: {currentUser.phoneNo}</h2>
      </ProfileInfo>
      <OtherInfo>
        <h2>Previous Orders</h2>
        {myOrders
          ? myOrders.map((order) => {
              return (
                <div>
                  Order ID: {order._id}
                  <br></br>
                  <div>
                    {order.orderArray.map((inner) => {
                      return (
                        <div>
                          <span>Name: {inner.name} </span>
                          <span>Price: ${inner.price} </span>
                          <span>Quantity: {inner.quantity} </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : ""}
      </OtherInfo>
    </Grid>
  );
};

const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 35% 65%;
  justify-content: center;
  align-items: center;
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
`;
const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
`;
export default CustomerProfile;

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
        <ProfileHeading>
          {currentUser.isAdmin ? (
            <h2>Welcome to Admin Pannel!</h2>
          ) : currentUser.isRestaurantOwner ? (
            <h2>Welcome to restaurant owner profile!</h2>
          ) : (
            <h2>Welcome to customer profile!</h2>
          )}
        </ProfileHeading>

        <ProfileHeading>
          <Span>User ID: </Span>
          <span></span>
          {currentUser._id}
        </ProfileHeading>
        <ProfileHeading>
          <Span>Name: </Span>
          <span>{currentUser.fullName}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Address:</Span> <span>{currentUser.address}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Phone No:</Span> <span>{currentUser.phoneNo}</span>
        </ProfileHeading>
      </ProfileInfo>
      <OtherInfo>
        <h1>Previous Orders</h1>

        {myOrders
          ? myOrders.map((order) => {
              return (
                <OrderWrapper>
                  <OrderDiv>
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
                  </OrderDiv>
                  <Button>Delete Order</Button>
                </OrderWrapper>
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
  grid-template-columns: 1.5fr 2fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 2rem;

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
  h1 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.2rem 0;
  }
  h2 {
    font-size: 1.1rem;
    margin: 0 0 0.8rem 0;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
`;

const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
  h1 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.2rem 0;
    padding: 0 0 0 0.5rem;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
`;

const OrderWrapper = styled.div`
  padding: 0.5rem;
`;

const OrderDiv = styled.div``;

const Button = styled.button`
  height: 1.5rem;
  width: 10rem;
  margin: 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.3rem;
  color: ${COLORS.secondary};
  cursor: pointer;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;
const Span = styled.span`
  font-style: italic;
`;

const ProfileHeading = styled.h2`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;
export default CustomerProfile;

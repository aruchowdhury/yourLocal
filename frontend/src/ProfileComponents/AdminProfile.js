import React, { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import { SignInContext } from "../LoginComponents/SignInContext";

const AdminProfile = () => {
  const { currentUser } = useContext(SignInContext);
  // console.log("currentuser at admin profile page", currentUser);

  return (
    <Grid>
      <ProfileInfo>
        <h1>Hello, {currentUser.fullName}! </h1>
        <ProfileHeading>
          {currentUser.isAdmin ? (
            <h2>Welcome to Admin Pannel.</h2>
          ) : currentUser.isRestaurantOwner ? (
            <h2>Welcome to restaurant owner profile.</h2>
          ) : (
            <h2>Welcome to customer profile.</h2>
          )}
        </ProfileHeading>
        <ProfileHeading>
          <Span> Name:</Span> <span>{currentUser.fullName}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Your User ID: </Span>
          <span>{currentUser._id}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Email:</Span> <span>{currentUser.email}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Phone No:</Span> <span>{currentUser.phoneNo}</span>
        </ProfileHeading>
        <ProfileHeading>
          <Span>Address:</Span> <span>{currentUser.address}</span>
        </ProfileHeading>
      </ProfileInfo>

      <UpdateItem>
        <Link to="/admin-profile/user-control">
          <ControlBtn>User Control </ControlBtn>
        </Link>
      </UpdateItem>
      <UpdateItem>
        <Link to="/admin-profile/restaurant-control">
          <ControlBtn>Restaurant Control </ControlBtn>
        </Link>
      </UpdateItem>
    </Grid>
  );
};

const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 1.6fr 2fr;
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

const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
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

const ControlBtn = styled.button`
  height: 5rem;
  width: 15rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
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
  align-items: center;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  span {
    width: 10rem;
    margin-right: 6rem;
  }
`;
export default AdminProfile;

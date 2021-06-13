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

      <UpdateItem>
        <Link to="/admin-profile/user-control">
          <UserControlBtn>User Control </UserControlBtn>
        </Link>
      </UpdateItem>
      <UpdateItem>
        <Link to="/admin-profile/restaurant-control">
          <UserControlBtn>Restaurant Control </UserControlBtn>
        </Link>
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
  //
`;
// const AddItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: left;
//   padding: 2rem;
//   background: ${COLORS.secondary};
// `;

// const Input = styled.input`
//   width: 17rem;
//   padding: 0.4rem;
//   border-radius: 0.3rem;
//   margin: 0.2rem 0.2rem 0.2rem 0;
// `;

// const Button = styled.button`
//   height: 2.1rem;
//   width: 5rem;
//   margin: 0.5rem 0.5rem 0.5rem 0;
//   background: ${COLORS.primary};
//   border: 0.1rem solid ${COLORS.primary};
//   border-radius: 0.4rem;
//   color: ${COLORS.secondary};
//   cursor: pointer;

//   &:hover {
//     background: ${COLORS.secondary};
//     border: 0.1rem solid ${COLORS.primary};
//     border-radius: 0.4rem;
//     color: ${COLORS.primary};
//   }
// `;

const UserControlBtn = styled.button`
  height: 4rem;
  width: 10rem;
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
export default AdminProfile;

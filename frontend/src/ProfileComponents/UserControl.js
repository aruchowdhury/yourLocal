import React, { useEffect, useContext } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { COLORS } from "../Constants";

const UserControl = () => {
  //update and delete user

  const { allUsers, setAllUsers, userChange, setUserChange } =
    useContext(SignInContext);

  // console.log("all users from user control", allUsers);
  const history = useHistory();
  useEffect(() => {
    fetch("/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from user control", json.data);
        setAllUsers(json.data);
      });
  }, [userChange]);

  const handleClickDelete = (e, id) => {
    e.preventDefault();

    fetch(`/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserChange(!userChange));
  };

  const handleClickUpdate = (e, id) => {
    history.push(`/admin-profile/user-control/update/${id}`);
  };

  return (
    <Grid>
      {allUsers.length > 0
        ? allUsers.map((user) => {
            return (
              <SingleUser key={user._id}>
                <div>User Name: {user.fullName}</div>
                <div>User ID: {user._id}</div>
                <div>Email: {user.email}</div>
                <div>Phone No: {user.phoneNo}</div>
                <div>Address: {user.address}</div>

                {user.isAdmin ? (
                  <div>User Type: Admin user</div>
                ) : user.isRestaurantOwner ? (
                  <div>User Type: Restaurant owner</div>
                ) : (
                  <div>User Type: Customer</div>
                )}
                <Button
                  onClick={(e) => {
                    handleClickDelete(e, user._id);
                  }}
                >
                  Delete user
                </Button>
                <Button
                  onClick={(e) => {
                    handleClickUpdate(e, user._id);
                  }}
                >
                  Update User
                </Button>
              </SingleUser>
            );
          })
        : ""}
    </Grid>
  );
};
const Grid = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 25rem 25rem 25rem;
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const SingleUser = styled.div`
  padding: 1rem;
  width: 25rem;
  height: 12.8rem;
  border: none;
  border-radius: 0.2rem;
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
  margin: 0.1rem 0;
  border-radius: 0.3rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  &:hover {
    border: 0.1rem solid ${COLORS.primary};
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;

export default UserControl;

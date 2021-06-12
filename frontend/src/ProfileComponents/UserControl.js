import React, { useEffect, useContext, useState } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
const UserControl = () => {
  const { allUsers, setAllUsers, userChange, setUserChange } =
    useContext(SignInContext);

  const { userId } = useParams();

  console.log("all users from user control", allUsers);
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
    <UserGrid>
      {allUsers.length > 0
        ? allUsers.map((user) => {
            return (
              <SingleUser key={user._id}>
                <div>Name: {user.fullName}</div>
                <div>Email:{user.email}</div>
                <div>Phone Number:{user.phoneNo}</div>

                {user.isAdmin ? (
                  <div>User Type: Admin user</div>
                ) : user.isRestaurantOwner ? (
                  <div>User Type: Restaurant owner</div>
                ) : (
                  <div>User Type: Customer</div>
                )}
                <button
                  onClick={(e) => {
                    handleClickDelete(e, user._id);
                  }}
                >
                  Delete user
                </button>
                <button
                  onClick={(e) => {
                    handleClickUpdate(e, user._id);
                  }}
                >
                  Update User
                </button>
              </SingleUser>
            );
          })
        : ""}
    </UserGrid>
  );
};

const UserGrid = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
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

export default UserControl;

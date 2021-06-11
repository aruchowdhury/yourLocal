import React, { useEffect, useContext } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useParams } from "react-router";

const UserControl = () => {
  const { allUsers, setAllUsers } = useContext(SignInContext);
  const { userId } = useParams();

  console.log("all users from user control", allUsers);

  useEffect(() => {
    fetch("/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from user control", json.data);
        setAllUsers(json.data);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const singleUserData = { userId: userId };
    fetch(`/users/delete/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleUserData),
    })
      .then((res) => res.json())
      .then((data) => console.log("data from user control", data));
  };

  return (
    <UserGrid>
      {allUsers.map((user) => {
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
            <button onClick={handleClick}>Delete user</button>
          </SingleUser>
        );
      })}
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

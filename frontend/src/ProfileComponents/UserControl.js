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
      <UpdateItem>
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
      </UpdateItem>
    </Grid>
  );
};

const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
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

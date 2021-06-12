import React, { useContext, useEffect, useState } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const UserUpdate = () => {
  const { allUsers, setAllUsers, userChange, setUserChange } =
    useContext(SignInContext);

  const [user, setUser] = useState({});
  const [fullName, setfullName] = useState();
  const [address, setAddress] = useState();

  const { id } = useParams();
  const history = useHistory();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };

  const updateUser = () => {
    fetch(`/users/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName: user.fullName, address: user.address }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.id);
        setUserChange(!userChange);
        setAllUsers(data);
        console.log("data from patch", data);
        history.push("/admin-profile/user-control");
      });
  };

  return (
    <UserGrid>
      <form>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          defaultValue={fullName}
          onChange={handleInputChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          defaultValue={address}
          onChange={handleInputChange}
        />

        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
        <button>Cancel</button>
      </form>
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

export default UserUpdate;

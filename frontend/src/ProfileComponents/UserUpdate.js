import React, { useEffect, useContext, useState } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";

const UserUpdate = () => {
  const { allUsers, setAllUsers } = useContext(SignInContext);

  const [user, setUser] = useState({});
  const [name, setName] = useState();
  const [Address, setAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const { userId } = useParams();
  const history = useHistory();
  console.log("all users from user control", allUsers);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
    history.push("/");
  };

  const updateProduct = () => {
    fetch(`/addproducts/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        price: user.address,
      }),
    })
      .then((res) => res.json())
      .then((result) => setUser(result));
  };

  useEffect(() => {
    fetch(`/products/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.product.name);
        setAddress(result.product.address);
      });
  }, []);

  return (
    <UserGrid>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={handleInputChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          defaultValue={address}
          onChange={handleInputChange}
        />

        <button type="submit">Update</button>
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

const SingleUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  align-content: left;
`;

export default UserUpdate;

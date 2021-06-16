import React, { useContext, useState } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { COLORS } from "../Constants";

const UserUpdate = () => {
  const { setAllUsers, userChange, setUserChange } = useContext(SignInContext);
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [fullName, setfullName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const handleInputChange = (e) => {
    // console.log(e.target.value);
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
      body: JSON.stringify({
        fullName: user.fullName,
        address: user.address,
        email: user.email,
        phoneNo: user.phoneNo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.id);
        setUserChange(!userChange);
        setAllUsers(data);
        //console.log("data from patch", data);
        history.push("/admin-profile/user-control");
      });
  };

  return (
    <UserGrid>
      <h1>Input user updated information below:</h1>

      <UpdateForm>
        <InputDivWrapper>
          <label>Full Name:</label>
          <Input
            type="text"
            name="fullName"
            defaultValue={fullName}
            onChange={handleInputChange}
            placeholder="new full name"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Address:</label>
          <Input
            type="text"
            name="address"
            defaultValue={address}
            onChange={handleInputChange}
            placeholder="new address"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Email:</label>
          <Input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleInputChange}
            placeholder="new email"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Phone No:</label>
          <Input
            type="number"
            name="phoneNo"
            defaultValue={phoneNo}
            onChange={handleInputChange}
            placeholder="new phone no"
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <button style={{ opacity: "0" }}>Cancel</button>
          <Button type="submit" onClick={handleSubmit}>
            Update
          </Button>
        </InputDivWrapper>
      </UpdateForm>
    </UserGrid>
  );
};

const UserGrid = styled.div`
  margin: 5% 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  align-content: center;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 1rem;

  h1 {
    font-size: 1.5rem;
  }
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    margin: 5% 1.5%;
  }
`;

const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 21rem;
  height: 2.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border: none;
  background: ${COLORS.background};
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  height: 2.6rem;
  width: 20.9rem;
  margin: 0.5rem 0 0 9.6rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 17rem;
    margin: 0.5rem 0 0 0;
  }
`;
const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  label {
    margin-right: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    label {
      margin: 0 0;
    }
  }
`;

export default UserUpdate;

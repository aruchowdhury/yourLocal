import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../Constants";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    address: "",
    phoneNo: Number,
    email: "",
    restaurantId: "",
    restaurantName: "",
    password: "",
    confirmPassword: "",
    isRestaurantOwner: false,
  });
  const [trueResto, setTrueResto] = useState(false);
  // post/create restaurant
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const onChangeTick = (e) => {
    setTrueResto(!trueResto);
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(input.isRestaurantOwner);
    const newUser = {
      fullName: input.fullName,
      address: input.address,
      phoneNo: input.phoneNo,
      email: input.email,
      restaurantId: input.restaurantId,
      restaurantName: input.restaurantName,
      password: input.password,
      confirmPassword: input.confirmPassword,
      isRestaurantOwner: trueResto,
    };
    // console.log(JSON.stringify(newUser));

    axios.post("/users/register", newUser);
    if (input.password !== input.confirmPassword) {
      window.alert("password does not match");
    } else {
      setInput({
        fullName: "",
        email: "",
        address: "",
        phoneNo: Number,
        restaurantId: "",
        restaurantName: "",
        password: "",
        confirmPassword: "",
        isRestaurantOwner: false,
      });
    }
  };

  return (
    <Wrap>
      <h1>Please Register yourself!</h1>
      <RegistrationForm>
        <InputDivWrapper>
          <label> Full Name:</label>
          <Input
            onChange={onChange}
            type="text"
            name="fullName"
            value={input.fullName}
            placeholder="full name"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label> Address:</label>
          <Input
            onChange={onChange}
            type="text"
            name="address"
            value={input.address}
            placeholder="address"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label> Phone No:</label>
          <Input
            onChange={onChange}
            type="number"
            name="phoneNo"
            value={input.phoneNo}
            placeholder="phone no"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label> Email:</label>
          <Input
            onChange={onChange}
            type="email"
            name="email"
            value={input.email}
            placeholder="email"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label> Restaurant ID:</label>
          <Input
            onChange={onChange}
            type="text"
            name="restaurantId"
            value={input.restaurantId}
            placeholder="Restaurant ID"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label> Restaurant Name:</label>
          <Input
            onChange={onChange}
            type="text"
            name="restaurantName"
            value={input.restaurantName}
            placeholder="Restaurant Name"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Password:</label>
          <Input
            onChange={onChange}
            type="password"
            name="password"
            value={input.password}
            placeholder="password"
            required
          />
        </InputDivWrapper>
        <InputDivWrapper>
          <label>Confirm Password:</label>
          <Input
            onChange={onChange}
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="confirm password"
            required
          />
        </InputDivWrapper>
        <InputDiv>
          <input
            onChange={onChangeTick}
            type="checkbox"
            name="isRestaurantOwner"
            value={trueResto}
            required
          />
          <label> Restaurant Owner?</label>
        </InputDiv>

        <div>
          <Button onClick={onClick}> Register </Button>
        </div>
      </RegistrationForm>
    </Wrap>
  );
};

export default SignUp;
const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: .7rem;}
`;

const Wrap = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  margin: 1% 25%;
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

const RegistrationForm = styled.form`
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
  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
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

const InputDiv = styled.div`
  margin: 0.5rem 0 0.5rem 9.6rem;
  @media (max-width: 600px) {
    margin: 0.5rem 0;
  }
`;

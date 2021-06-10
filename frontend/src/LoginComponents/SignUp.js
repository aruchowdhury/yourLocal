import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
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
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
      isRestaurantOwner: trueResto,
    };
    // console.log(JSON.stringify(newUser));

    axios.post("/users/register", newUser);
    setInput({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isRestaurantOwner: false,
    });
  };

  return (
    <Wrap>
      <h1>Please Register yourself!</h1>
      <RegistrationForm>
        <div>
          <label> Full Name:</label>
          <br />
          <Input
            onChange={onChange}
            type="text"
            name="fullName"
            value={input.fullName}
            placeholder="full name"
            required
          />
        </div>
        <div>
          <label> Email:</label>
          <br />
          <Input
            onChange={onChange}
            type="email"
            name="email"
            value={input.email}
            placeholder="email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <Input
            onChange={onChange}
            type="password"
            name="password"
            value={input.password}
            placeholder="password"
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <br />
          <Input
            onChange={onChange}
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="confirm password"
            required
          />
        </div>
        <div>
          <input
            onChange={onChangeTick}
            type="checkbox"
            name="isRestaurantOwner"
            value={trueResto}
            required
          />
          <label> Restaurant Owner.</label>
        </div>

        <div>
          <Button onClick={onClick}> Register Now </Button>
        </div>
      </RegistrationForm>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div`
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
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
`;

const Input = styled.input`
  width: 21rem;
  height: 2.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
`;

const Button = styled.button`
  height: 2.6rem;
  width: 20.9rem;
  margin: 0.5rem 0;
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
  }
`;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Redirect, Link } from "react-router-dom";

export const Login = ({ allUsers, currentUser, setCurrentUser }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [login, setLogin] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/users/find/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setCurrentUser(json.data);

        console.log(json.data);
      });
  }, []);

  const handleChange = (e) => {
    setInputEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    allUsers.forEach((user) => {
      if (user.email === inputEmail) {
        setLogin((prev) => !prev);

        // here we set the currentUser state after doing a fetch get
        // to get one user by EMAIL
        console.log(
          "they can login... maybe we can do a fetch/to get & to set setCurrentUser"
        );
        console.log("allUsers", allUsers);
        console.log("inputemail", inputEmail);
        // based on currentUser.type, we route them to the specific page!
      } else {
        console.log("user email doesn't exist");
      }
    });
  };
  console.log("login", login);
  return (
    <Wrap>
      {/* {currentUser ? (
        user.isAdmin ? (
          <Redirect to="/admin-profile" />
        ) : user.isRestaurantOwner ? (
          <Redirect to="/restaurent-owner-profile" />
        ) : (
          <Redirect to="/customer-profile" />
        )
      ) : (
        <div></div>
      )} */}

      <h1>Sign in for better experience!</h1>
      <LoginForm>
        <div>
          <label> Email:</label>
          <br />
          <Input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <Input type="password" name="password" required />
        </div>

        <div>
          <Button onClick={handleSubmit}>Sign in</Button>
        </div>
        <div>
          <h3>
            Not Registed? <Link to="/signup">Please sign up!</Link>
          </h3>
        </div>
      </LoginForm>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div`
  margin: 10% 25%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

const LoginForm = styled.form`
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

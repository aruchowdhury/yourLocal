import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Link, useHistory } from "react-router-dom";
import { SignInContext } from "./SignInContext";

export const Login = () => {
  const { allUsers, currentUser, setCurrentUser, setAllUsers } =
    useContext(SignInContext);

  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // fetched all user data to signin page

  useEffect(() => {
    fetch("/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // const restaurantArray = Object.values(data);
        console.log(json.data);
        setAllUsers(json.data);
      });
  }, []);

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  //compared incoming data to fetched data and then pushed to specefic profile after login
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredUser = allUsers.find((user) => {
      return user.email === inputEmail;
    }); // end of filter
    if (filteredUser) {
      if (filteredUser.password === password) {
        console.log(filteredUser);
        fetch(`/users/find/${filteredUser._id}`, { METHOD: "GET" })
          .then((res) => res.json())
          .then((json) => {
            // console.log(json);
            setCurrentUser(json.data);
            if (json.data.isAdmin) {
              history.push("/admin-profile");
            } else if (json.data.isRestaurantOwner) {
              history.push("/restaurant-owner-profile");
            } else {
              history.push("/customer-profile");
            }
          });
      } else {
        console.log("password doesn't match");
      }
    } else {
      console.log("no user in db ");
    }
  };

  return (
    <Wrap>
      <h1>Sign in for better experience!</h1>
      <LoginForm>
        <div>
          <label> Email:</label>
          <br />
          <Input
            onChange={handleChangeEmail}
            type="email"
            name="email"
            value={inputEmail}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <Input
            onChange={handleChangePassword}
            type="password"
            name="password"
            value={password}
            required
          />
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
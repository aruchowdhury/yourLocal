import React, { useEffect, useContext, useState } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import axios from "axios";

const UserControl = () => {
  //add user

  const [input, setInput] = useState({
    fullName: "",
    address: "",
    phoneNo: Number,
    email: "",
    password: "",
    confirmPassword: "",
    isCustomer: false,
    isRestaurantOwner: false,
    isAdmin: false,
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
    // console.log(input.isRestaurantOwner);
    const newUser = {
      fullName: input.fullName,
      address: input.address,
      phoneNo: input.phoneNo,
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
      isCustomer: false,
      isRestaurantOwner: trueResto,
      isAdmin: trueResto,
    };
    // console.log(JSON.stringify(newUser));

    axios.post("/users/register", newUser);
    setInput({
      fullName: "",
      email: "",
      address: "",
      phoneNo: Number,
      password: "",
      confirmPassword: "",
      isCustomer: false,
      isRestaurantOwner: false,
      isAdmin: false,
    });
  };

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
      <ProfileInfo>
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
            <label> Address:</label>
            <br />
            <Input
              onChange={onChange}
              type="text"
              name="address"
              value={input.address}
              placeholder="address"
              required
            />
          </div>
          <div>
            <label> Phone No:</label>
            <br />
            <Input
              onChange={onChange}
              type="number"
              name="phoneNo"
              value={input.phoneNo}
              placeholder="phone no"
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
            <label> Restaurant Owner?</label>
          </div>
          <div>
            <input
              onChange={onChangeTick}
              type="checkbox"
              name="isAdmin"
              value={trueResto}
              required
            />
            <label> Admin User?</label>
          </div>

          <div>
            <Button onClick={onClick}> Add User </Button>
          </div>
        </RegistrationForm>
      </ProfileInfo>
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
  grid-template-columns: 1fr 2fr;
  justify-content: stretch;
  align-items: stretch;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
  grid-row: 1/3;
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
const SingleUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
  align-content: left;
`;

export default UserControl;

import React, { useEffect, useContext } from "react";
import { SignInContext } from "../LoginComponents/SignInContext";

const UserControl = () => {
  const { allUsers, setAllUsers } = useContext(SignInContext);

  console.log("all users from user control", allUsers);
  useEffect(() => {
    fetch("/users", { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        // console.log("data from user control", json.data);
        setAllUsers(json.data);
      });
  }, []);
  return <div>use control</div>;
};

export default UserControl;

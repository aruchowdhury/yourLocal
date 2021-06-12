import React, { useState, createContext } from "react";

export const SignInContext = createContext(null);

export const SignInProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [userChange, setUserChange] = useState(false);

  return (
    <SignInContext.Provider
      value={{
        allUsers,
        setAllUsers,
        currentUser,
        setCurrentUser,
        userChange,
        setUserChange,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
};

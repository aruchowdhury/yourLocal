// import React, { useReducer } from "react";
// import AuthContext from "./AuthContext";
// import AuthReducer from "./AuthReducer";
// import axios from "axios";

// import {
//   REGISTER_USER,
//   LOAD_USER,
//   LOGIN_USER,
//   LOGOUT,
//   REGISTRATION_FAILED,
//   LOGIN_FAILED,
//   AUTH_ERROR,
// } from "../Constants";

// export const AuthState = (children) => {
//   const initialState = {
//     token: localStorage.getItem("token"),
//     isAuthenticated: null,
//     user: null,
//     loading: true,
//     error: null,
//   };

//   const [state, dispatch] = useReducer(AuthReducer, initialState);

//   //Load user

//   const loadUser = async () => {
//     try {
//       const res = await axios.get("./user");
//       dispatch({
//         type: LOAD_USER,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: AUTH_ERROR,
//       });
//     }
//   };

//   //Register user

//   const registerUser = async (formData) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const res = await axios.post("./user", formData, config);
//       dispatch({
//         type: REGISTER_USER,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: REGISTRATION_FAILED,
//         payload: err.res.data.message,
//       });
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         token: state.token,
//         isAuthenticated: state.isAuthenticated,
//         user: state.user,
//         loading: state.loading,
//         error: state.error,
//         registerUser,
//         loadUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

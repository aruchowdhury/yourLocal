import React, { useState, createContext } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  //state and handler for modal 1(sigin)
  const [openModal1, setOpenModal1] = useState(false);

  const handleClickOpen1 = () => {
    setOpenModal1((prev) => !prev);
  };
  const handleClose1 = () => {
    setOpenModal1(false);
  };
  //state and handler for modal 2 (signup)
  const [openModal2, setOpenModal2] = useState(false);

  const handleClickOpen2 = () => {
    setOpenModal2((prev) => !prev);
    setOpenModal1((prev) => !prev);
  };
  const handleClose2 = () => {
    setOpenModal2(false);
  };

  // state for dropdown
  const [hover, setHover] = useState(false);
  const handleHover = () => setHover(!hover);

  // console.log("openModal", openModal);

  return (
    <ModalContext.Provider
      value={{
        openModal1,
        setOpenModal1,
        handleClickOpen1,
        handleClose1,
        openModal2,
        setOpenModal2,
        handleClickOpen2,
        handleClose2,
        hover,
        setHover,
        handleHover,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

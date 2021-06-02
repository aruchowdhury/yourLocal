import React, { useState, createContext } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  // console.log("openModal", openModal);

  const handleClickOpen = () => {
    setOpenModal((prev) => !prev);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        handleClickOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

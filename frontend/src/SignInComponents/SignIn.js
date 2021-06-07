import React, { useRef, useContext } from "react";
import { ModalContext } from "../ModalContext";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const SignIn = () => {
  const { openModal1, setOpenModal1, handleClickOpen2, handleClose1 } =
    useContext(ModalContext);
  const signInRef = useRef();

  const closeSignIn = (e) => {
    if (signInRef.current === e.target) {
      setOpenModal1(false);
    }
  };

  return (
    <>
      {openModal1 ? (
        <Background onClick={closeSignIn} ref={signInRef}>
          <SignInWrapper openModal={openModal1}>
            <ModalContent>
              <h1>Look at my modal</h1>
              <p>Modal is wonderfull</p>
              <button>Signin</button>
              <p>Not registered?</p>

              <button onClick={handleClickOpen2}>Signup</button>
            </ModalContent>
            <CloseModalButton onClick={handleClose1} />
          </SignInWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignInWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffae01;
  color: black;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 100;
  border-radius: 10px;
  margin-top: -150px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  color: black;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 10000;
`;
export default SignIn;

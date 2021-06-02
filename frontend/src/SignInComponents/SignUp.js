import React, { useRef, useContext } from "react";
import { ModalContext } from "../ModalContext";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const SignUp = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const signInRef = useRef();

  const closeSignIn = (e) => {
    if (signInRef.current === e.target) {
      setOpenModal(false);
    }
  };

  return (
    <>
      {openModal ? (
        <Background onClick={closeSignIn} ref={signInRef}>
          <SignInWrapper openModal={openModal}>
            <ModalContent>
              <h1>Sign up form</h1>
              <p>Modal is wonderfull</p>
              <button>Signup</button>
            </ModalContent>
            <CloseModalButton onClick={() => setOpenModal((prev) => !prev)} />
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
  z-index: 1;
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
  z-index: 1;
`;
export default SignUp;

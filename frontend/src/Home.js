import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import img from "./assets/bgimg.jpeg";
import imgMobile from "./assets/bgimgresponsive.jpeg";
import { COLORS } from "./Constants";
const Home = () => {
  return (
    <Landing>
      <ContentDiv>
        <h1>tasty local food like old days...</h1>
        <h2>find your own local food!</h2>
        <h2>and all other ehinic food around you!</h2>
        <NavLink to="/restaurants">
          <Button>Order Now</Button>
        </NavLink>
      </ContentDiv>
    </Landing>
  );
};

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 3rem;}
`;

const ContentDiv = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 33%;
  height: 80%;
  margin: -1% 0 5% 55%;

  border-radius: 0.5rem;
  font-size: 1.5rem;
  /* background-color: rgba(242, 232, 221, 0.5); */
  background-color: rgba(74, 66, 66, 0.7);
  color: ${COLORS.primary};
  @media (max-width: 600px) {
    margin: 1rem;
  }
  &:hover {
    background-color: rgba(74, 66, 66, 0.5);
    transition: 0.3s ease-in-out;
  }
  h1 {
    padding: 0.3rem 0;
  }
  h2 {
    padding: 0.3rem 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80%;
    padding: 0.5rem;
    background-color: rgba(74, 66, 66, 0.7);
    margin: -25% 3% 0 3%;
  }
`;
const Button = styled.button`
  height: 2.5rem;
  width: 9rem;
  margin: 1.5rem 0;
  background: ${COLORS.primary};
  color: ${COLORS.secondary};
  border: 0.2rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgba(74, 66, 66, 0.5);
    border: 0.2rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
  }
`;

const Landing = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  background-image: url(${img});
  background-size: cover;
  width: 92%;
  height: 82.5vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 4.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: -3% 0 5% 4%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  @media (max-width: 600px) {
    background-image: url(${imgMobile});
    height: 80vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: -10% 0 20% 4%;
  }
`;

export default Home;

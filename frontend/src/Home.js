import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "./assets/bgimg.jpeg";
import imgMobile from "./assets/bgimgresponsive.jpeg";
import { COLORS } from "./Constants";
const Home = () => {
  return (
    <Landing>
      <ContentDiv>
        <h1>tasty local food like old days...</h1>
        <h2>find your own local food!</h2>
        <h2>and all other ehinic food around you!!</h2>
        <NavLink to="/restaurants">
          <Button>Order Now</Button>
        </NavLink>
      </ContentDiv>
    </Landing>
  );
};

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 33%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 62.5%;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: rgba(242, 232, 221, 0.2);
  color: ${COLORS.primary2};
  @media (max-width: 600px) {
    margin: 1rem;
  }
  &:hover {
    background-color: rgba(242, 232, 221, 0.3);
    transition: 0.3s ease-in-out;
  }
  h1 {
    padding: 0.3rem 0;
  }
  h2 {
    padding: 0.3rem 0;
  }

  @media (max-width: 600px) {
    position: absolute;
    top: 8%;
    left: 0%;
    width: 90%;
    height: 80%;
    padding: 0.5rem;
    background-color: rgba(242, 232, 221, 0.3);
  }
`;
const Button = styled.button`
  height: 2.5rem;
  width: 9rem;
  margin: 1.5rem 0;
  background: ${COLORS.primary2};
  color: ${COLORS.secondary};
  border: 0.2rem solid ${COLORS.primary2};
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgba(242, 232, 221, 0.3);
    border: 0.2rem solid ${COLORS.primary2};
    border-radius: 0.4rem;
    color: black;
  }
`;

const Landing = styled.div`
  background-image: url(${img});
  background-size: cover;
  position: absolute;
  top: 10%;
  left: 4%;
  width: 92%;
  height: 83.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  @media (max-width: 600px) {
    background-image: url(${imgMobile});
  }
`;

export default Home;

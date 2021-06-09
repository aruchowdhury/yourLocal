import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "./assets/bg.png";
import { COLORS } from "./Constants";
const Home = () => {
  return (
    <Background>
      <Wrapper>
        <ImageDiv></ImageDiv>
        <ContentDiv>
          <h1>tasty local food like old days...</h1>
          <h2>find your own local food!</h2>
          <h2>and all other ehinic food around you!!</h2>
          <NavLink to="/restaurants">
            <Button>Order Now</Button>
          </NavLink>
        </ContentDiv>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  width: 90vw;
  height: 82vh;
  color: black;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};

  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;
const ImageDiv = styled.div`
  flex: 2;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`;

const ContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  @media (max-width: 600px) {
    margin: 1rem;
  }
`;
const Button = styled.button`
  height: 2.2rem;
  width: 7rem;
  margin: 1.5rem 0;
  background: ${COLORS.primary};
  color: ${COLORS.secondary};
  border: 0.2rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.2rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: black;
  }
`;

export default Home;

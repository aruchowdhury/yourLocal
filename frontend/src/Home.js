import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "./assets/bg.png";
const Home = () => {
  return (
    <Background>
      <Wrapper>
        <ImageDiv></ImageDiv>
        <ContentDiv>
          <h1>tasty local food like old days...</h1>
          <h2>find your local food!</h2>
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
  background-color: #ffae01;
  width: 88vw;
  height: 85vh;
  color: black;
`;
const ImageDiv = styled.div`
  flex: 1;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const ContentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
`;
const Button = styled.button`
  height: 2.2rem;
  width: 7rem;
  margin: 1.5rem 0;
  background: black;
  border: 0.2rem solid black;
  border-radius: 0.4rem;
  color: #ffae01;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #ffae01;
    border: 0.2rem solid black;
    border-radius: 0.4rem;
    color: black;
  }
`;

export default Home;

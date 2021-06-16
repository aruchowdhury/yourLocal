import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "./Constants";

const About = () => {
  return (
    <Background>
      <Wrapper>
        <Para>
          <h1>Why yourL🥘CAL:</h1>
          <p>
            According to{" "}
            <a
              style={{ color: "black" }}
              href="https://www.restaurantscanada.org/support-restaurants/"
              alt="restaurantscanada.org web url"
            >
              https://www.restaurantscanada.org/support-restaurants/,
            </a>{" "}
            since march 2020 10,000 restaurants closed their kitchen permanently
            due to a global pandemic. A big portion of those closed restaurants
            is locally owned small businesses. So it was never been a hard time
            for our local business owners than now ever.
          </p>
          <p>
            After joining Concordia Bootcamp I was thinking why not make a
            product to help this group of people and also help consumers to find
            specific local or ethnic food they are looking for. So I decided to
            make an application where all local and ethnic restaurants can have
            their owned web presence, food ordering system, and much more. And
            for consumers, you are looking for all sushi shops or smoked burger
            shop in your locality or maybe you are looking for authentic Italian
            restaurants, now can you get them all in one place and can order
            from them.{" "}
          </p>
          <p>
            To make this project a real product I contacted 2 local restaurants
            and they responded really well. But they don’t have enough digital
            photos of foods that I would require for my application ASAP. So I
            have decided to make my application with mock photos and those 2
            restaurant owners are really interested and wants to work with me in
            future.
          </p>{" "}
          <p>
            Now I would like to present my product yourLocals. It is a food
            order and restaurant management SAAS application.
          </p>
        </Para>
      </Wrapper>
    </Background>
  );
};

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 3rem;}
`;

const Background = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  padding: 2rem;
  margin: 0 20%;
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 600px) {
    margin: 0 1.5% 22%;
    border-radius: 1rem;
    width: 90vw;
    height: 100%;
  }
`;
const Para = styled.p`
  font-size: 1.22rem;
  padding: 0 3.5rem;
  h1 {
    font-size: 1.7rem;
    padding: 0.5rem 0;
  }

  p {
    padding: 0.5rem 0;
  }
  a {
    display: inline;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
export default About;

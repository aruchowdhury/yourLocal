import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Background>
      <Wrapper>
        <Para>
          <h1>Why yourL🍔CAL:</h1>
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

const Background = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem;
  border-radius: 1.5rem;
  background-color: #ffae01;
  width: 60vw;
  height: 72vh;
  color: black;
`;
const Para = styled.p`
  font-size: 1.2rem;
  color: black;
  padding: 0 3.5rem;
  a {
    &:hover {
      opacity: 0.5;
    }
  }
`;
export default About;

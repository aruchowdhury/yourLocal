import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Constants";

const Restaurant = ({ restaurant }) => {
  //   console.log("restaurant ", restaurant);
  //   console.log("restaurant ", restaurant[0]);

  return (
    <ItemWrapper>
      <ItemImg src={restaurant.imgSrc} />
      <InfoWrap>
        <Name>{restaurant.name}</Name>
        <InfoDiv>{restaurant.description}</InfoDiv>
        <Address>{restaurant.address}</Address>
        <Link to={`/restaurants/${restaurant.category}/${restaurant._id}`}>
          <OrderButton>Order now!</OrderButton>
        </Link>
      </InfoWrap>
    </ItemWrapper>
  );
};

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 3rem;}
`;

const ItemWrapper = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  width: 26rem;
  height: 18rem;
  margin: -15% 0 20%;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  color: orange;
  background: ${COLORS.secondary};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);

    transform: translateY(-0.5rem);
  }
  @media (max-width: 600px) {
    width: 20rem;
    height: 13rem;
    margin: -9% 0 20%;
  }
`;

const InfoWrap = styled.div`
  margin: 1rem;
  position: relative;
  background-color: rgba(74, 66, 66, 0.8);
  padding: 0.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
`;

const ItemImg = styled.img`
  border-radius: 1rem;
  width: 26rem;
  height: 18rem;
  position: absolute;
  @media (max-width: 600px) {
    width: 20rem;
    height: 13rem;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 1.6rem;
  font-size: 1.2rem;
  border: none;
  margin: 0.3rem 0;
  border-radius: 0.3rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
  &:hover {
    border: 0.1rem solid ${COLORS.primary};
    background: rgba(74, 66, 66, 0.8);
    color: orange;
    transition: 0.3s ease-in-out;
  }
`;

const InfoDiv = styled.div`
  color: ${COLORS.background};
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-size: 1.3rem;
  border-radius: 0.3rem;
`;

const Address = styled.div`
  font-size: 1rem;
`;
export default Restaurant;

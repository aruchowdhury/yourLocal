import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../Constants";
import { CartContext } from "../CartComponents/CartContext";

const MenuItem = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  return (
    <ItemWrapper>
      <ItemImg src={item.imgSrc} />
      <InfoWrap>
        <PriceWrap>
          <Name>{item.name}</Name>
          <Name>${item.price}</Name>
        </PriceWrap>
        <InfoDiv>{item.description}</InfoDiv>
        <OrderButton onClick={() => onAdd(item)}>Add to cart!</OrderButton>
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
  padding: 0 0 1rem 0;
  width: 100%;
  height: 18rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: ${COLORS.secondary};
  margin: -25% 0 20%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-0.5rem);
  }
  @media (max-width: 600px) {
    height: 18rem;
    margin: -12% 0 20%;
  }
`;

const InfoWrap = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 5.8rem;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    height: 6.5rem;
  }
`;

const ItemImg = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  height: 10rem;
`;

const PriceWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  height: 1.5rem;
  @media (max-width: 600px) {
    height: 2.5rem;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  height: 1.6rem;
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
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;

const InfoDiv = styled.div`
  color: #5c5e5e;
  font-style: italic;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.3rem;
`;

export default MenuItem;

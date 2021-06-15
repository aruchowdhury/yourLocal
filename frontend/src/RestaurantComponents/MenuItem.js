import React, { useContext } from "react";
import styled from "styled-components";
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

const ItemWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  height: 22rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: ${COLORS.secondary};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 600px) {
    height: 23rem;
  }
`;

const InfoWrap = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    height: 5.5rem;
  }
`;

const ItemImg = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 14rem;
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
  font-size: 1rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  @media (max-width: 600px) {
    height: 2rem;
  }
`;

const Name = styled.div`
  font-size: 1.3rem;
  border-radius: 0.3rem;
`;

export default MenuItem;

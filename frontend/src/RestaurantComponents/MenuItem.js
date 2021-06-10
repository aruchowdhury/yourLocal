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
  width: 18rem;
  height: 23rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: ${COLORS.secondary};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const InfoWrap = styled.div`
  border-radius: 0.5rem;
  width: 16rem;
  height: 4rem;
  margin-bottom: 1rem;
`;

const ItemImg = styled.img`
  border-radius: 1rem;
  width: 16rem;
  height: 15rem;
`;

const PriceWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
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
  }
`;

const InfoDiv = styled.div`
  color: #5c5e5e;
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.div`
  font-size: 1.3rem;
  border-radius: 0.3rem;
`;

export default MenuItem;

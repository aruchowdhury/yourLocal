import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Constants";

const Restaurant = ({ restaurant }) => {
  //   console.log("restaurant ", restaurant);
  //   console.log("restaurant ", restaurant[0]);

  return (
    <ItemWrapper>
      <ItemImg src={restaurant.imageSrc} />
      <InfoWrap>
        <Hover>
          {restaurant.isOpen ? (
            <Link
              to={`/all-restaurants/${restaurant.category}/${restaurant._id}`}
            >
              <OrderButton>Order now!</OrderButton>
            </Link>
          ) : null}
        </Hover>
        <Name>{restaurant.name}</Name>
        <InfoDiv>{restaurant.description}</InfoDiv>
        <Address>{restaurant.address}</Address>
      </InfoWrap>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  padding: 1rem;
  width: 17rem;
  height: 17rem;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  align-content: left;
  background: ${COLORS.secondary};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const InfoWrap = styled.div``;

const ItemImg = styled.img`
  position: absolute;
  border-radius: 1rem;
  align-self: center;
`;
const Hover = styled.div`
  position: relative;
  z-index: 3;
  background: none;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`;
const OrderButton = styled.button`
  width: 60%;
  height: 1.6rem;
  border: none;
  margin: 0.3rem 0;
  border-radius: 0.3rem;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;
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

const Address = styled.div`
  font-size: 1rem;
`;
export default Restaurant;

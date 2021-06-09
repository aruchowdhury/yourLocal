import React, { useContext, useState } from "react";
import { DropDownItems } from "./DropDownItems";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../Constants";

const RestaurantDropDown = () => {
  return (
    <>
      <DropDownMenu>
        {DropDownItems.map((item, index) => {
          return (
            <MenuItems key={index}>
              <ItemLink to={item.path}>{item.title}</ItemLink>
            </MenuItems>
          );
        })}
      </DropDownMenu>
    </>
  );
};

// if onhover is true on restaurent i want to display this menu
//and onclick it will take you to restaurents page

const DropDownMenu = styled.div`
  width: 6.9rem;
  position: absolute;
  top: 2.6rem;
  right: 15.4rem;
  list-style: none;
  text-align: left;

  @media (max-width: 600px) {
    display: none;
  }
`;
const MenuItems = styled.div`
  background: ${COLORS.secondary};
  cursor: pointer;
  font-size: 1rem;
`;

const ItemLink = styled(Link)`
  color: ${COLORS.primary};
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 0.2rem;
  &:hover {
    background: ${COLORS.primary};
    color: ${COLORS.secondary};
    transition: max-height 0.4s ease-in;
  }
`;
export default RestaurantDropDown;

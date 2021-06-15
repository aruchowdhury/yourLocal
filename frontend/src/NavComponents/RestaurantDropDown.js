import React, { useContext, useState } from "react";
import { DropDownItems } from "./DropDownItems";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { SignInContext } from "../LoginComponents/SignInContext";
const RestaurantDropDown = () => {
  const { currentUser } = useContext(SignInContext);
  return (
    <>
      {!currentUser ? (
        <DropDownMenu>
          {DropDownItems.map((item, index) => {
            return (
              <MenuItems key={index}>
                <ItemLink to={item.path}>{item.title}</ItemLink>
              </MenuItems>
            );
          })}
        </DropDownMenu>
      ) : (
        <DropDownMenu1>
          {DropDownItems.map((item, index) => {
            return (
              <MenuItems key={index}>
                <ItemLink to={item.path}>{item.title}</ItemLink>
              </MenuItems>
            );
          })}
        </DropDownMenu1>
      )}
    </>
  );
};

// if onhover is true on restaurent i want to display this menu
//and onclick it will take you to restaurents page

const DropDownMenu = styled.div`
  width: 7.2rem;
  position: absolute;
  top: 2.9rem;
  right: 22.5rem;
  list-style: none;
  text-align: left;
  z-index: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

const DropDownMenu1 = styled.div`
  width: 7.2rem;
  position: absolute;
  top: 2.9rem;
  right: 23.35rem;
  list-style: none;
  text-align: left;
  z-index: 1;

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

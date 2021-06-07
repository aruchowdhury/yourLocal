import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ModalContext } from "../ModalContext";
import RestaurantDropDown from "./RestaurantDropDown";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { COLORS } from "../Constants";

const Navbar = () => {
  const { setOpenModal1, handleHover } = useContext(ModalContext);

  // crating a state to make hamburger menu to go up and down on click
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItem = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOpen = () => {
    setOpenModal1((prev) => !prev);
    handleMenuItem();
  };

  return (
    <Wrapper>
      <Logo to="/">
        <span>your</span>L🍔CAL
      </Logo>
      <HamburgerMenu onClick={handleMenuItem}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      <MenuItems isOpen={isOpen}>
        <MenuItemLink onClick={handleMenuItem} exact to="/about">
          About
        </MenuItemLink>
        {/* <MenuItemLink
          onClick={() => setIsOpen(!isOpen)}
          exact
          to="/restaurants"
        >
          Restaurants
        </MenuItemLink> */}
        <MenuItemLink onClick={handleMenuItem} exact to="/restaurants">
          <RestaurantDropDown />
          Restaurants
        </MenuItemLink>
        <MenuItemLink onClick={handleMenuItem} exact to="/contact">
          Contact
        </MenuItemLink>
        {/* <LoginItemLink exact path="/signin">
          Login
        </LoginItemLink> */}
        <Button onClick={handleClickOpen}>SignIn</Button>
        <CartButton onClick={handleClickOpen}>
          <HiOutlineShoppingCart />
        </CartButton>
      </MenuItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem 2rem 0.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  color: ${COLORS.primary};
`;

const Logo = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem 0;
  color: ${COLORS.primary};
  text-decoration: none;
  cursor: pointer;
  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 27px;
    background: ${COLORS.primary};
    margin: 2.5px;
    border-radius: 3px;
  }
  @media (max-width: 600px) {
    display: flex;
  }
  &:hover {
    transition: 0.3s ease-in;
    span {
      background: white;
    }
  }
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    // passed isOpen through props to control menu is open or not by changing max-height
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.4s ease-in;
  }
`;

const MenuItemLink = styled(NavLink)`
  padding: 0.2rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.primary};
  border-radius: 4px;

  &:hover {
    color: ${COLORS.secondary};
    transition: 0.3s ease-in;
    background: ${COLORS.primary};
  }
`;
// const LoginItemLink = styled(NavLink)`
//   padding: 0.1rem;
//   margin: 0.8rem;
//   cursor: pointer;
//   text-decoration: none;
//   text-align: center;
//   color: black;
//   background: #ffae01;
//   border-radius: 4px;
//   border: 1px solid #ffae01;

//   &:hover {
//     color: #ffae01;
//     transition: 0.3s ease-in;
//     background: none;
//     border: 1px solid #ffae01;
//   }
// `;
const Button = styled.button`
  padding: 0.1rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.secondary};
  background: ${COLORS.primary};
  border-radius: 4px;
  border: 1px solid ${COLORS.primary};
  font-size: 1.1rem;

  &:hover {
    color: ${COLORS.primary};
    transition: 0.3s ease-in;
    background: none;
    border: 1px solid ${COLORS.primary};
  }
`;
const CartButton = styled.button`
  padding: 0 0.3rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.primary};
  background: ${COLORS.background};
  border-radius: 4px;
  border: 1px solid ${COLORS.background};
  font-size: 1.2rem;

  &:hover {
    color: ${COLORS.primary};
    transition: 0.3s ease-in;
    background: none;
    border: 1px solid ${COLORS.primary};
  }
`;

export default Navbar;

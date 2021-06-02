import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ModalContext } from "../ModalContext";

const Navbar = () => {
  const { openModal, handleClickOpen } = useContext(ModalContext);

  // crating a state to make hamburger menu to go up and down on click
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Logo to="/">
        <span>your</span>L🍔CAL
      </Logo>
      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      <MenuItems isOpen={isOpen}>
        <MenuItemLink exact to="/about">
          About
        </MenuItemLink>
        <MenuItemLink exact to="/restaurants">
          Restaurants
        </MenuItemLink>
        <MenuItemLink exact to="/contact">
          Contact
        </MenuItemLink>
        {/* <LoginItemLink exact path="/signin">
          Login
        </LoginItemLink> */}
        <Button onClick={handleClickOpen}>SignIn</Button>
      </MenuItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
`;

const Logo = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem 0;
  color: #ffae01;
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
    background: #ffae01;
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
  color: #ffae01;
  border-radius: 4px;

  &:hover {
    color: black;
    transition: 0.3s ease-in;
    background: #ffae01;
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
  color: black;
  background: #ffae01;
  border-radius: 4px;
  border: 1px solid #ffae01;
  font-size: 1.1rem;

  &:hover {
    color: #ffae01;
    transition: 0.3s ease-in;
    background: none;
    border: 1px solid #ffae01;
  }
`;

export default Navbar;

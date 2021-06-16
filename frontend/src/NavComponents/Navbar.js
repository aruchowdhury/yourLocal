import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import RestaurantDropDown from "./RestaurantDropDown";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { COLORS } from "../Constants";
import { CartContext } from "../CartComponents/CartContext";
import { SignInContext } from "../LoginComponents/SignInContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(SignInContext);

  // crating a state to make hamburger menu to go up and down on click
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleMenuItem = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    setCurrentUser(false);
    // localStorage.clear();
  };

  return (
    <Wrapper>
      <Logo to="/">
        <span>your</span>L🥘CAL
      </Logo>
      <HamburgerMenu onClick={handleMenuItem}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>

      {!currentUser ? (
        <MenuItems isOpen={isOpen}>
          <RestaurantMenuItemLink
            onClick={handleMenuItem}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            exact
            to="/restaurants"
          >
            {isShown && (
              <div>
                <RestaurantDropDown />
              </div>
            )}
            Restaurants
          </RestaurantMenuItemLink>
          <MenuItemLink onClick={handleMenuItem} exact to="/about">
            About
          </MenuItemLink>
          <MenuItemLink onClick={handleMenuItem} exact to="/contact">
            Contact
          </MenuItemLink>
          <LoginItemLink onClick={handleMenuItem} exact to="/signin">
            SignIn
          </LoginItemLink>
          <NavLink style={{ textDecoration: "none" }} to={"/order/cart"}>
            <CartButton>
              <HiOutlineShoppingCart />
              {cartItems.length ? (
                <CartItem>{cartItems.length}</CartItem>
              ) : (
                <EmptyCartItem>0</EmptyCartItem>
              )}
            </CartButton>
          </NavLink>
        </MenuItems>
      ) : (
        <MenuItems isOpen={isOpen}>
          {currentUser.isAdmin ? (
            <ProfileMenuItemLink
              onClick={handleMenuItem}
              exact
              to="/admin-profile"
            >
              Profile
            </ProfileMenuItemLink>
          ) : currentUser.isRestaurantOwner ? (
            <ProfileMenuItemLink
              onClick={handleMenuItem}
              exact
              to="/restaurant-owner-profile"
            >
              Profile
            </ProfileMenuItemLink>
          ) : (
            <ProfileMenuItemLink
              onClick={handleMenuItem}
              exact
              to="/customer-profile"
            >
              Profile
            </ProfileMenuItemLink>
          )}

          <RestaurantMenuItemLink
            onClick={handleMenuItem}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            exact
            to="/restaurants"
          >
            {isShown && (
              <div>
                <RestaurantDropDown />
              </div>
            )}
            Restaurants
          </RestaurantMenuItemLink>
          <MenuItemLink onClick={handleMenuItem} exact to="/about">
            About
          </MenuItemLink>
          <MenuItemLink onClick={handleMenuItem} exact to="/contact">
            Contact
          </MenuItemLink>

          <LoginItemLink onClick={handleSignOut} exact to="/signin">
            SignOut
          </LoginItemLink>
          <NavLink style={{ textDecoration: "none" }} to={"/order/cart"}>
            <CartButton>
              <HiOutlineShoppingCart />
              {cartItems.length ? (
                <CartItem>{cartItems.length}</CartItem>
              ) : (
                <EmptyCartItem>0</EmptyCartItem>
              )}
            </CartButton>
          </NavLink>
        </MenuItems>
      )}
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

  @media (max-width: 600px) {
    position: relative;
    z-index: 10;
  }
`;

const Logo = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
  padding: 1rem 0;
  color: ${COLORS.primary};
  text-decoration: none;
  cursor: pointer;
  span {
    font-weight: 320;
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
    max-height: ${({ isOpen }) => (isOpen ? "330px" : "0")};
    transition: max-height 0.4s ease-in;
  }
`;

const MenuItemLink = styled(NavLink)`
  padding: 0.4rem;
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

const LoginItemLink = styled(NavLink)`
  padding: 0.38rem;
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
  padding: 0.25rem 0.1rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.primary};
  background: ${COLORS.background};
  border-radius: 4px;
  border: 1px solid ${COLORS.background};
  font-size: 1.5rem;
  display: flex;
  flex-direction: row-gap;

  &:hover {
    color: ${COLORS.primary};
    transition: 0.3s ease-in;
    background: none;
    border: 1px solid ${COLORS.primary};
  }
`;

const CartItem = styled.div`
  color: ${COLORS.primary};
  font-size: 1rem;
`;
const EmptyCartItem = styled.div`
  color: ${COLORS.primary};
  font-size: 1rem;
  opacity: 0;
`;

const RestaurantMenuItemLink = styled(NavLink)`
  padding: 0.4rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.primary};
  border-radius: 4px;
  /* position: absolute; */
  top: 0.05rem;
  right: 22rem;

  &:hover {
    color: ${COLORS.secondary};
    transition: 0.3s ease-in;
    background: ${COLORS.primary};
  }
`;

const ProfileMenuItemLink = styled(NavLink)`
  padding: 0.4rem;
  margin: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.primary};
  border-radius: 4px;
  /* position: absolute; */
  top: 0.05rem;
  right: 30rem;

  &:hover {
    color: ${COLORS.secondary};
    transition: 0.3s ease-in;
    background: ${COLORS.primary};
  }
`;
export default Navbar;

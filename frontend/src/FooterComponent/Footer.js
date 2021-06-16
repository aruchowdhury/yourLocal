import React from "react";
import styled from "styled-components";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa";
import { COLORS } from "../Constants";

const Footer = () => {
  return (
    <Foot>
      <CopyWrite>
        <span>
          <FaRegCopyright />
        </span>
        <span>{new Date().getFullYear()}</span>
        <Logo>
          yourL<span>🍔</span>CAL{" "}
        </Logo>
      </CopyWrite>

      <Social>
        <a href="/#">
          <TiSocialTwitter />
        </a>
        <a href="/#">
          <TiSocialInstagram />
        </a>
        <a href="/#">
          <TiSocialFacebook />
        </a>
        <a href="/#">
          <TiSocialYoutube />
        </a>
      </Social>
    </Foot>
  );
};
const Foot = styled.div`
  width: 100vw;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  color: ${COLORS.primary};
  font-size: 1rem;

  @media (max-width: 600px) {
    position: inherit;
  }
`;

const CopyWrite = styled.div`
  padding: 0 12.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const Logo = styled.div`
  padding: 0 1rem;
  span {
    font-size: 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 0 0.4rem;
  }
`;
const Social = styled.div`
  padding: 0 12.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;

  a {
    margin: 0 2rem;
    padding: 0 0.3rem;
    color: ${COLORS.primary};
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      border: 0.1rem solid ${COLORS.primary};
    }
    @media (max-width: 600px) {
      padding: 0 0.2rem;
      margin: 0 0.2rem;
    }
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
export const SuccessPage = () => {
  const { id } = useParams();
  return (
    <Wrap>
      <div>Your order is successfull!</div>

      <div>Order ID: {id}</div>
      <div>
        To Check your current order and all previous orders plase sign in.
      </div>

      <Link to="/signin">
        <Button>Sign in</Button>
      </Link>
    </Wrap>
  );
};

export default SuccessPage;

const Wrap = styled.div`
  margin: 10% 25%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  border-radius: 1rem;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 12px 12px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
      0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 8px rgba(0, 0, 0, 0.25),
      0 12px 12px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
`;

const MessageDiv = styled.form`
  padding: 2rem;
  @media (max-width: 600px) {
  }
`;

const Button = styled.button`
  height: 2.6rem;
  width: 20.9rem;
  margin: 0.5rem 0;
  background: ${COLORS.primary};
  border: 0.1rem solid ${COLORS.primary};
  border-radius: 0.4rem;
  color: ${COLORS.secondary};
  cursor: pointer;

  &:hover {
    background: ${COLORS.secondary};
    border: 0.1rem solid ${COLORS.primary};
    border-radius: 0.4rem;
    color: ${COLORS.primary};
    transition: 0.3s ease-in-out;
  }
`;

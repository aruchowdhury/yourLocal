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

      <Link>
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

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
  }
`;

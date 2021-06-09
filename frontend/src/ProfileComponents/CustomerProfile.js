import React from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";

const CustomerProfile = ({ currentUser }) => {
  return (
    <Grid>
      <ProfileInfo>
        <h2>Hello, </h2>
      </ProfileInfo>
      <OtherInfo>
        <h2>Previous Orders</h2>
      </OtherInfo>
    </Grid>
  );
};

const Grid = styled.div`
  margin: 3rem 2rem;
  display: grid;
  grid-template-columns: 35% 65%;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;

  @media (max-width: 675px) {
    grid-template-columns: 20rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
`;
const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
  background: ${COLORS.secondary};
`;
export default CustomerProfile;

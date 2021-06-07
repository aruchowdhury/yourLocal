import React from "react";
import styled from "styled-components";

const CustomerProfile = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileInfo>
          <h2>Hello, </h2>
        </ProfileInfo>
        <OtherInfo>
          <h2>Previous Order</h2>
        </OtherInfo>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem;
  border-radius: 1.5rem;
  background-color: #ffae01;
  width: 60vw;
  height: 72vh;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
`;
const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
`;
export default CustomerProfile;

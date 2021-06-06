import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "./assets/bg.png";
import { TiPhoneOutline } from "react-icons/ti";
import { BiEnvelopeOpen } from "react-icons/bi";
import { GiArrowCursor } from "react-icons/gi";

const Contact = () => {
  return (
    <Background>
      <Wrapper>
        <ContactInfo>
          <h3>
            <Envelope>
              <BiEnvelopeOpen />
            </Envelope>
            CONTACT{" "}
            <HomeLink to="/">
              US
              <GiArrowCursor />
            </HomeLink>
          </h3>

          <div>
            <p>
              <TiPhoneOutline /> +1 222 333 4444
            </p>
            <p> 111-0000 Rue Abc, Montreal</p>
            <p>A0B 0C0, QC</p>
          </div>
        </ContactInfo>
        <ContactForm>
          <h2>Contact Form</h2>
          <form action="submit">
            <NameDiv>
              <div>
                <label>First Name:</label>
                <br />
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Your First Name"
                  required
                />
              </div>
              <div>
                <label>Last Name:</label>
                <br />
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Your Last Name"
                  required
                />
              </div>
            </NameDiv>{" "}
            <br />
            <label>Telephone:</label>
            <br />
            <Input
              type="number"
              name="telephone"
              placeholder="Your telephone no"
              maxlength="10"
              required
            />
            <br />
            <label>Email:</label>
            <br />
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <br />
            <label>Message:</label>
            <br />
            <MessageInput
              type="text"
              name="message"
              placeholder="Write your message..."
              required
            />
            <br />
            <ButtonDiv>
              <Button>Clear</Button>
              <Button>Send</Button>
            </ButtonDiv>
          </form>
        </ContactForm>
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
  border-radius: 1.5rem;
  /* background-color: #f28e13; */
  background-color: #ffae01;
  /* background-color: #e59c00; */
  width: 60vw;
  height: 75vh;
  color: black;
  margin: 1.6% 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding: 2rem;
`;
const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 2rem;
`;

const HomeLink = styled(NavLink)`
  text-decoration: underline 0.2rem solid;
  color: black;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Envelope = styled.div`
  font-size: 5rem;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  align-content: space-around;
`;

const Input = styled.input`
  width: 12rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
`;
const MessageInput = styled.input`
  width: 25rem;
  height: 4rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  margin: 0.2rem 0;

  @media (max-width: 600px) {
    width: 12rem;
    height: 10rem;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: right;
  align-content: space-around;
`;

const Button = styled.button`
  height: 2.2rem;
  width: 5rem;
  margin: 0.5rem 0 0.5rem 0.5rem;
  background: black;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  color: #ffae01;
  cursor: pointer;

  &:hover {
    background: #ffae01;
    border: 0.1rem solid black;
    border-radius: 0.4rem;
    color: black;
  }
`;

export default Contact;

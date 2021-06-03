import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "./assets/bg.png";
import { GiCandlestickPhone } from "react-icons/gi";
import { BiEnvelopeOpen } from "react-icons/bi";

const Contact = () => {
  return (
    <Background>
      <Wrapper>
        <ContactInfo>
          <h3>
            <Envelope>
              <BiEnvelopeOpen />
            </Envelope>
            CONTACT <HomeLink to="/">US</HomeLink>
          </h3>

          <div>
            <p>
              <GiCandlestickPhone /> +1 222 333 4444
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
  background-color: #b97e00;
  margin: auto;
  width: 85vw;
  height: 80vh;
  align-content: center;
  align-items: center;
  /* background-image: url(${img});
  background-size: cover; */
  position: relative;
  z-index: -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  border-radius: 1.5rem;
  background-color: #ffae01;
  width: 60rem;
  height: 30rem;
  color: black;
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
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: white;
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

  &:hover {
    background: #ffae01;
    border: 0.1rem solid black;
    border-radius: 0.4rem;
    color: black;
  }
`;

export default Contact;

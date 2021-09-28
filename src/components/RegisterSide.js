import React from "react";
import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";
import Input from "./Input";

const RegisterSide = () => {
  return (
    <Container>
      <LogoWrapper>
        <h3>
          Welcome <br />
          <span>To The Team</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="Email" placeholder="Email" />
        <Input type="Password" placeholder="Password" />
        <Input type="Password" placeholder="Confirm Password" />
        <Input type="Tax File Number" placeholder="TFN " />
        <Input type="Address" placeholder="Address " />
        <Input type="Suburb" placeholder="Suburb " />
        <Input type="Post Code " placeholder="Post Code  " />
        <Input type="Bank BSB" placeholder="Bank BSB " />
        <Input type="Bank Account" placeholder="Bank Account " />
        <Input type="SuperFund" placeholder="Superfund Company " />
        <Input type="Super Account" placeholder=" Super Account Number" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service.
        </Terms>
      </div>
    </Container>
  );
};

export default RegisterSide;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #275e8f;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Coffee = styled(GiBookshelf)`
  color: #1cb576;
  transform: scale(5);
  margin: 15%;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  h3 {
    text-align: center;
    color: #275e8f;
    font-size: 22px;
    span {
      color: #275e8f;
    }
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  padding-top: 3rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

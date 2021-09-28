import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.png";
import RegisterMain from "./RegisterMain";
import RegisterSide from "./RegisterSide";

const Register = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <RegisterSide />
        <RegisterMain />
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

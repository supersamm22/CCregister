import React from "react";
import styled from "styled-components";

const RegisterMain = () => {
  return (
    <Container>
      <h1>
        Join The <br /> Team
      </h1>
    </Container>
  );
};

export default RegisterMain;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: #275e8f;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Modal: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 300px;
  position: fixed;
  top: 200px;
`;

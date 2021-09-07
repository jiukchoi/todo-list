import React from 'react';
import styled from 'styled-components';
import GNB from './GNB';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <GNB />
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

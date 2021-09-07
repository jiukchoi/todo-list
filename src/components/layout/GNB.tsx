import React from 'react';
import styled from 'styled-components';
import { getDate } from '../../utils/dateService';

const GNB: React.FC = () => {
  const date = getDate();

  return (
    <UpperWrapper>
      <Wrapper>
        <Title>To Do List</Title>
        <DateBar>{date}</DateBar>
      </Wrapper>
    </UpperWrapper>
  );
};

export default GNB;

const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #00000010;
`;
const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  padding: 15px 30px;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const DateBar = styled.span`
  font-size: 30px;
`;

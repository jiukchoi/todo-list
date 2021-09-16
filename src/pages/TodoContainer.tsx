import React from 'react';
import styled from 'styled-components';
import TodoHeader from './header/TodoHeader';
import TodoList from './list/TodoList';

const TodoContainer: React.FC = () => {
  return (
    <UpperWrapper>
      <Wrapper>
        <TodoHeader />
        <TodoList />
      </Wrapper>
    </UpperWrapper>
  );
};

export default TodoContainer;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin-top: 50px;
  padding-bottom: 50px;
`;

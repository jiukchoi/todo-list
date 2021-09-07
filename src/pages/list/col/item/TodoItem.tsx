import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../../../utils/contexts/todo';
import { ITodo } from '../../../../utils/types/todo';

interface ITodoItem {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('todo', String(todo.id));
  };

  const onDeleteClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const newTodos = todos.filter(
      (todo) => todo.id !== Number(e.currentTarget.id)
    );
    setTodos(newTodos);
  };

  return (
    <Wrapper draggable onDragStart={onDragStart} id={String(todo.id)}>
      <Task>{todo.task}</Task>
      <DeleteIcon
        id={String(todo.id)}
        src="/img/delete.png"
        onClick={onDeleteClick}
      />
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 33px;
  background-color: #ffffff;
  border: 1px solid #00000020;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px 30px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Task = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeleteIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

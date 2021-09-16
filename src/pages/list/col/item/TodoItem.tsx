import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../../../utils/contexts/todo';
import { ITodo } from '../../../../utils/types/todo';
import deleteIcon from '../../../../assets/delete.png';
import { ModalContext } from '../../../../utils/contexts/modal';
import editIcon from '../../../../assets/editIcon.png';

interface ITodoItem {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo: thisTodo }) => {
  const { todos, setTodos, setTodo } = useContext(TodoContext);
  const { showReadModal, setShowReadModal, isUpdate, setIsUpdate } =
    useContext(ModalContext);
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('todo', String(thisTodo.id));
  };

  const onDeleteClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const newTodos = todos.filter(
      (todo) => todo.id !== Number(e.currentTarget.id)
    );
    setTodos(newTodos);
  };

  const onReadClick = () => {
    setShowReadModal(!showReadModal);
    setTodo({ ...thisTodo });
  };

  const onUpdateClick = () => {
    setShowReadModal(!showReadModal);
    setTodo({ ...thisTodo });
    setIsUpdate(!isUpdate);
  };

  return (
    <Wrapper draggable onDragStart={onDragStart} id={String(thisTodo.id)}>
      <Task onClick={onReadClick}>{thisTodo.task}</Task>
      <EditIcon onClick={onUpdateClick} src={editIcon} />
      <DeleteIcon
        id={String(thisTodo.id)}
        src={deleteIcon}
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
  font-size: 15px;
  background-color: #ffffff;
  border: 1px solid #00000020;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px 20px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Task = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
`;

const EditIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

const DeleteIcon = styled.img`
  width: 15px;
  cursor: pointer;
`;

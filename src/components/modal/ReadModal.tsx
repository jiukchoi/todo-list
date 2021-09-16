import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../utils/contexts/todo';
import letterxIcon from '../../assets/letterxIcon.png';
import { ModalContext } from '../../utils/contexts/modal';

const ReadModal: React.FC = () => {
  const { todo } = useContext(TodoContext);
  const { showReadModal, setShowReadModal, isUpdate, setIsUpdate } =
    useContext(ModalContext);

  const onDeleteClick = () => {
    setShowReadModal(!showReadModal);
  };

  return (
    <ReadModalContainer>
      {isUpdate ? (
        <>
          <UpdateInput autoFocus spellCheck="false" defaultValue={todo.task} />
          <Footer>
            <UpdateBtn>수정하기</UpdateBtn>
          </Footer>
        </>
      ) : (
        todo.task
      )}
      <DeleteBtnContainer>
        <DeleteBtn onClick={onDeleteClick} src={letterxIcon} />
      </DeleteBtnContainer>
    </ReadModalContainer>
  );
};

export default ReadModal;

const ReadModalContainer = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px 30px;
  overflow-wrap: break-word;
  font-size: 20px;
`;

const DeleteBtnContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: #bdbdbd;
  border: 2px solid black;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteBtn = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const UpdateInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  margin-bottom: 15px;
  font-size: 15px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UpdateBtn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #00000050;
`;

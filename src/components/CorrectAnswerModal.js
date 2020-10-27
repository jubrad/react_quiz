import React from 'react';
import styled from 'styled-components';

const ModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;

  ${({show}) => show ? "display: block" : "display: none"}
`;

const ModalCardMain = styled.section`
  position:fixed;
  background: var(--color-primary-light);
  width: 60vw;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1vw;
  border: 5px solid var(--color-primary-lighter);
  color: var(--font-primary-dark);
`;

const CorrectAnswerModal = ({ show, children }) => {
  return (
    <ModalCard show={show} >
      <ModalCardMain>
        {children}
      </ModalCardMain>
    </ModalCard>
  );
};

export default CorrectAnswerModal;
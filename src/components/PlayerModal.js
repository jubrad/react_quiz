import React from 'react';
import styled from 'styled-components';

const ModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  ${({show}) => show ? "display: block" : "display: none"}
`;

const ModalCardMain = styled.section`
  position:fixed;
  width: 50vw;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 1vw;
  border-radius: 10px;
  background-color: var(--color-primary-light);
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-secondary);
`;

const PlayerModal = ({ show, children }) => {
  return (
    <ModalCard show={show} >
      <ModalCardMain>
        {children}
      </ModalCardMain>
    </ModalCard>
  );
};

export default PlayerModal;
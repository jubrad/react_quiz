import React from 'react';
import styled from 'styled-components';

const ModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
  height: 100vh;
  background: var(--color-secondary-dark);

  ${({show}) => show ? "display: block" : "display: none"}
`;

const ModalCardMain = styled.section`
  position:fixed;
  background: var(--color-secondary);
  width: 50vw;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  border-radius: 2vh;
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
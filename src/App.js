import React from 'react';
import styled from 'styled-components';
import './App.css';

const AppCard = styled.div`
  text-align: center;
`
const AppCardHeader = styled.div`
  background-color: var(--color-primary-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 3vmin);
  color: var(--font-color-primary);
`
const AppCardButton = styled.button`
  background-color: var(--color-secondary-dark);
  min-height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-secondary);
  border-radius: 2vh;
`
function App() {
  return (
    <AppCard>
      <AppCardHeader>
        <h1>Questions And Answers Game</h1>
      <AppCardButton>
        Start Playing
      </AppCardButton>
      </AppCardHeader>
    </AppCard>
  );
}

export default App;

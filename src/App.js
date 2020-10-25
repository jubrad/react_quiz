import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import GameStart from './views/GameStart';
import Question from './views/Question';

const AppCard = styled.div`
  text-align: center;
`
const AppCardHeader = styled.header`
  background-color: var(--color-secondary-dark);
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary);
`
function App() {
  return (
    <AppCard>
      <AppCardHeader>
        <h1>Questions And Answers Game</h1>
      </AppCardHeader>

      <BrowserRouter>
          <Route path="/" exact component={GameStart} />
          <Route path="/question" component={Question} />
      </BrowserRouter>
    </AppCard>
  );
}

export default App;

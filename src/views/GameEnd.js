import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameEndCard = styled.main`
  background-color: var(--color-primary-light);
  min-height: 84.75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-light);
  `
const GameEndButton = styled.button`
  background-color: var(--color-secondary);
  min-height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-dark);
  border-radius: 2vh;
`

function GameEnd() {
  return (
    <GameEndCard>
      <p>
        Congratulations, you've won this game and free smile!
      </p>
      <h1>
        :)
      </h1>
      <Link to="/">
        <GameEndButton type="button">
          Play Again!
        </GameEndButton>
      </Link>

    </GameEndCard>
  )
}
export default GameEnd;
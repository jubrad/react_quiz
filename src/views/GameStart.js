import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlayerModal from '../components/PlayerModal';

const GameStartCard = styled.main`
  background-color: var(--color-primary-light);
  min-height: 84.75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary);
  `
const GameStartButton = styled.button`
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
const PlayerModalForm = styled.form`
  position:fixed;
  width: 50vw;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 1vw;
  border-radius: 10px;
  background-color: var(--color-primary-lighter);
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-secondary);
`
const ModalPlayerInput = styled.input`
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
const PlayerModalButton = styled.button`
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
class GameStart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playerName: '',
      loggedIn: false,
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('playerName', this.state.playerName)
    this.hideModal()
    this.props.history.push('/question.js')
  }

  handleChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  render() {
    return (
      <GameStartCard>
        <p>
          Click below and type your name to start playing
        </p>
        <GameStartButton type="button" onClick={this.showModal}>
          Start Playing
        </GameStartButton>

        <PlayerModal show={this.state.show} handleClose={this.hideModal}>
          <PlayerModalForm onSubmit={this.handleSubmit}>
            <label>
              Name of the Player
              <br/>
              <ModalPlayerInput type="text" name="playerName" placeholder="John Doe" onChange={this.handleChange} value={this.state.playerName}/>
            </label>
            <br/>
            <Link to='/question'>
              <PlayerModalButton type="submit">Submit and start playing!</PlayerModalButton>
            </Link>
          </PlayerModalForm>
        </PlayerModal>

      </GameStartCard>
    )
  }
}

export default GameStart;
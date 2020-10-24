import React, { Component } from 'react';
import styled from 'styled-components';
import PlayerModal from './components/PlayerModal';

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
const AppCardMain = styled.main`
  background-color: var(--color-primary-light);
  min-height: 84.75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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
const Form = styled.form`
  background-color: var(--color-primary-light);
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-secondary);
`

class App extends Component {
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
    this.props.history.push('/questions')
  }

  handleChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  render () {
    return (
      <AppCard>

        <AppCardHeader>
          <h1>Questions And Answers Game</h1>
        </AppCardHeader>

        <AppCardMain>
          <p>
            Click below and type your name to start playing
          </p>

          <AppCardButton type="button" onClick={this.showModal}>
            Start Playing
          </AppCardButton>

        </AppCardMain>

        <PlayerModal show={this.state.show} handleClose={this.hideModal}>
          <Form onSubmit={this.handleSubmit}>
            <label>
              Name of the Player
              <br/>
              <input type="text" name="playerName" placeholder="John Doe" onChange={this.handleChange} value={this.state.playerName}/>
            </label>
            <br/>
            <AppCardButton type="submit">
            Submit and Play!
            </AppCardButton>
          </Form>
        </PlayerModal>

      </AppCard>
    )
  }
}

export default App;
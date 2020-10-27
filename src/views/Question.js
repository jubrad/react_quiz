import React, { Component } from 'react';
import styled from 'styled-components';
import dbQuestions from '../db.json';
import CorrectAnswerModal from '../components/CorrectAnswerModal';

const QuestionCard = styled.div`
  position:fixed;
  width: 50vw;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 1vw;
  margin: 2vw;
  border-radius: 10px;
  background-color: var(--color-primary-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-light);
`
const QuestionCardInfo = styled.div`
  background-color: var(--color-primary-dark);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-secondary);
  border-radius: 2vh;
`
const QuestionCardHeader = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-dark);
`
const QuestionCardBody = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  margin-top: 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-dark);
  border-radius: 2vh;
`
const AnswersForm = styled.form`
  padding: 2vh;
`
const SingleAnswer = styled.div`
  background-color: var(--color-primary-dark);
  color: var(--font-color-primary-light);
  width: 48vw;
  font-size: calc(10px + 2vmin);
  display: flex;
  justify-content: left;
`
const SubmitAnswerButton = styled.button`
  background-color: var(--color-primary-dark);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-light);
`
const CorrectAnswerModalButton = styled.button`
  background-color: var(--color-primary-lighter);
  min-height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--font-color-primary-dark);
  border-radius: 2vh;
`

class Question extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      questions: [],
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

  // This function inside any event listener because it takes the event as a parameter
  // When you trigger the event, your function gets executed
  // I still need to understand what the target do and come from exactly
  handleChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  render() {
    return (
      <QuestionCard>
        <QuestionCardInfo>
          <p>Question {JSON.stringify(dbQuestions[0].id)}</p>
          <p>{localStorage.getItem('playerName') || 'Player'}</p>
        </QuestionCardInfo>

        <QuestionCardHeader>
          <p>
            {JSON.stringify(dbQuestions[0].question)};
          </p>
        </QuestionCardHeader>

        <QuestionCardBody>
          <AnswersForm>
            <SingleAnswer>
              <label for="answer">
                <input type="radio" id="answer" name="answer1" value="answer1"/>
                Flower
              </label>
            </SingleAnswer>
            <br/>
            <SingleAnswer>
              <label for="answer">
                <input type="radio" id="answer" name="answer1" value="answer1"/>
                Flower
              </label>
            </SingleAnswer>
            <br/>
            <SingleAnswer>
              <label for="answer">
                <input type="radio" id="answer" name="answer1" value="answer1"/>
                Flower
              </label>
            </SingleAnswer>
            <br/>
            <SingleAnswer>
              <label for="answer">
                <input type="radio" id="answer" name="answer1" value="answer1"/>
                Flower
              </label>
            </SingleAnswer>
            <br/>
            <SubmitAnswerButton type="button" onClick={this.showModal}>
              Submit Answer
            </SubmitAnswerButton>
          </AnswersForm>
        </QuestionCardBody>

        <CorrectAnswerModal show={this.state.show} handleClose={this.hideModal}>
            <h2>
              Congrats, you've got the correct answer!
            </h2>
          <CorrectAnswerModalButton type="submit">Next Question</CorrectAnswerModalButton>
        </CorrectAnswerModal>

      </QuestionCard>
    )
  }
}

export default Question;
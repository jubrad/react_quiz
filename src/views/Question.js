import React, { Component } from 'react';
import styled from 'styled-components';
import CorrectAnswerModal from '../components/CorrectAnswerModal';
import WrongAnswerModal from '../components/WrongAnswerModal';
import dbQuestions from '../db.json';

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
const WrongAnswerModalButton = styled.button`
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
      questions: this.shuffle(dbQuestions),
      correctCount: 0,
      formRef: React.createRef()
    }
    
  }
  
  showModal = () => {
    this.setState({ show: true });
  };
  
  hideCorrect = () => {
    this.setState({ correct: false });
  };

  hideIncorrect = () => {
    this.setState({ incorrect : false });
  };

  checkAnswer = (e) => {
    e.preventDefault();
    if (this.state.answer && this.state.questions[0].answer[this.state.answer]) {
      this.setState({correct: true, correctCount: this.state.correctCount+1})
    } else {
      this.setState({incorrect: true})
    }

  }

  toggleAnswer = (ansName) => {
    let updateQs = this.state.questions
    updateQs[0].answers['ansName'] = !updateQs[0].answers['ansName']
    this.setState({question: updateQs})
  }

  restart = () => {
   this.setState({
     questions: this.shuffle(dbQuestions),
     correctCount: 0,
     answer: null
    })
   this.hideIncorrect()
   this.state.formRef.current.reset()
  }

  quit = () => {
    this.props.history.push('/')
  }

  nextQuestion = () => {
     this.setState({ 
       questions: this.state.questions.slice(1,this.state.questions.length),
       answer: null
     })
     this.hideCorrect()
     this.state.formRef.current.reset()
  }

  shuffle = (ar) => {
    //fisher-yates shuffle
    let shuffledAr = [...ar];
    let i = ar.length -1
    while(i > 0) {
      let swap = Math.floor(Math.random() * i);
      let tmp = shuffledAr[swap]
      shuffledAr[swap] = shuffledAr[i]
      shuffledAr[i] = tmp
      i--
    }
    return shuffledAr
  }


  displayOption = (q, option) => {
    return (
        <SingleAnswer>
        <input type="checkbox" name={q.id}  value={option} onClick={() => this.setState({answer: option})}/> {option}
        </SingleAnswer>
    )
  }

  questionOptions = (question) => {
    return (
          <AnswersForm ref={this.state.formRef}>
              <label htmlFor="answer">
                {
                  Object.entries(question.answer).map( (obj)=> {return this.displayOption(question, obj[0]) })
                }
              </label>
            <br/>
            <SubmitAnswerButton type="button" onClick={this.checkAnswer}>
              Submit Answer
            </SubmitAnswerButton>
          </AnswersForm>
     )
  }

  render() {
    return (
      <QuestionCard>
        <QuestionCardInfo>
          <p>{localStorage.getItem('playerName') || 'Player'}</p>
        </QuestionCardInfo>

        <QuestionCardHeader>
          <p> {this.state.questions[0].question} </p>
        </QuestionCardHeader>
      
        <QuestionCardBody>
          { this.questionOptions(this.state.questions[0]) }
        </QuestionCardBody>

      <CorrectAnswerModal show={this.state.correct} handleClose={this.hideIncorrect}>
        <h2>
          Congrats, you've got the correct answer!
        </h2>
        <CorrectAnswerModalButton type="submit" onClick={this.nextQuestion}>
          Next Question
        </CorrectAnswerModalButton>
      </CorrectAnswerModal>

      <WrongAnswerModal show={this.state.incorrect} handleClose={this.hideIncorrect}>
          <h2>
            Sorry, you didn't get it right this time!
          </h2>
        <WrongAnswerModalButton type="submit" onClick={this.quit}>
          Quit Playing
        </WrongAnswerModalButton>
        <WrongAnswerModalButton type="submit" onClick={this.restart}>
          Restart the Game
        </WrongAnswerModalButton>
      </WrongAnswerModal>

    <p> You've answer {this.state.correctCount} correct so far</p>
    </QuestionCard>
    )
  }
}

export default Question;

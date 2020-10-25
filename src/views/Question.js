import React, { Component } from 'react';
import styled from 'styled-components';
import dbQuestions from '../db.json';

const QuestionsCard = styled.div`
  border: 1px solid black;
  margin: 10px auto;
  padding: 5px; 
`
const QuestionsCardHeader = styled.div`
  border: 1px solid black;
  margin: 10px auto;
  padding: 5px; 
`
const QuestionsCardBody = styled.div`
  border: 1px solid black;
  margin: 10px auto;
  padding: 5px; 
`

class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      loading: false
    }

  }
  
  componentDidMount() {
    this.handleLoadQuestions(this.props.match.params.category)
  }

  handleLoadQuestions(category) {
    const filteredQuestions = dbQuestions.filter(question => question.category === category)
    this.setState({
      isLoading: true,
      questions: filteredQuestions,
    })
  }

  render() {
    return (
      <div>
        <QuestionsCard>
          <QuestionsCardHeader>
            <h2>First Question</h2>
          </QuestionsCardHeader>
          { this.state.questions.map((e) => {
            console.log(e)
            return (
              <QuestionsCardBody>
                <h3>{e.question}</h3>
                {Object.keys(e.answer).map(answer => {
                  return (
                    <label>
                      <input type="radio" name="answer" value={answer}/>
                      {answer}
                    </label>
                  )
                })}
              </QuestionsCardBody>
            )
          }) }
        </QuestionsCard>
      </div>
    )
  }
}

export default Questions;
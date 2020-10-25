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
class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
    }

  }

  render() {
    return (
      <QuestionsCard>
        <QuestionsCardHeader>
          <h2>First Question</h2>
        </QuestionsCardHeader>
        {JSON.stringify(dbQuestions)}
      </QuestionsCard>
    )
  }
}

export default Question;
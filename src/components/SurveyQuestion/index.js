import React from 'react';

import INPUT_TYPES from 'config/inputTypes';

import TextQuestion from './TextQuestion';
import OptionQuestion from './OptionQuestion';

import { ErrorMessage } from './styled';

export default function SurveyQuestion({ question, onAnswerChange, error }) {
  const getContentByQuestionType = () => {
    switch (question.type) {
      case INPUT_TYPES.TEXT:
        return <TextQuestion question={question} onChange={onAnswerChange} />;

      case INPUT_TYPES.MULTIPLE_OPTION: 
      case INPUT_TYPES.SINGLE_OPTION:
        return <OptionQuestion question={question} onChange={onAnswerChange} />;

      default:
        return null;
    }
  }

  return (
    <>
      <h3>{question.title}</h3>
      {getContentByQuestionType()}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}
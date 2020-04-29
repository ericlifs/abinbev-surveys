import React, { useEffect } from 'react';

import INPUT_TYPES from 'config/inputTypes';

import TextQuestion from './TextQuestion';
import OptionQuestion from './OptionQuestion';

import { ErrorMessage } from './styled';


export default function SurveyQuestion({ question, onAnswerChange, error }) {
  useEffect(() => {
    const { name, answers, type } = question;

    if (!name) {
      throw new Error('Question should have the mandatory "name" field');
    }

    const INPUTS_WITH_ANSWERS = [INPUT_TYPES.SINGLE_OPTION, INPUT_TYPES.MULTIPLE_OPTION];

    if (INPUTS_WITH_ANSWERS.includes(type) && (!answers || answers.length === 0)) {
      throw new Error('Question is missing mandatory "answers" array field');
    }
  }, [question]);

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
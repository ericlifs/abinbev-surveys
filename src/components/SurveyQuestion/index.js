import React from 'react';

import INPUT_TYPES from 'config/inputTypes';

import { TextInput, CheckInputWrapper, CheckInput, CheckInputLabel } from './styled';

export default function SurveyQuestion({ question }) {
  const getContentByQuestionType = () => {
    switch (question.type) {
      case INPUT_TYPES.TEXT:
        return <TextInput type="text" />;

      case INPUT_TYPES.MULTIPLE_OPTION: 
      case INPUT_TYPES.SINGLE_OPTION:
        const fieldType = question.type === 'MULTIPLE_OPTION' ? 'checkbox' : 'radio';

        return question.answers.map(answer => (
          <CheckInputWrapper key={answer}>
            <CheckInput type={fieldType} id={answer} name={question.name} value={answer} />
            <CheckInputLabel htmlFor={answer}>{answer}</CheckInputLabel>
          </CheckInputWrapper>
        ));

      default:
        return null;
    }
  }

  return (
    <>
      <h3>{question.title}</h3>
      {getContentByQuestionType()}
    </>
  )
}
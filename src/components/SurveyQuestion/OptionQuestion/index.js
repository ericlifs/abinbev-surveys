import React, { useState } from 'react';

import INPUT_TYPES from 'config/inputTypes';

import { CheckInputWrapper, CheckInput, CheckInputLabel } from './styled';

export default function OptionQuestion({ question, onChange }) {
  const [values, setValues] = useState([]);
  const isMultiple = question.type === INPUT_TYPES.MULTIPLE_OPTION; 
  const fieldType = isMultiple ? 'checkbox' : 'radio';
  
  const computeMultipleOptionsValue = newValue => {
    if (values.includes(newValue)) {
      return values.filter(value => value !== newValue);
    }

    return [...values, newValue];
  }

  const onValueChange = ev => {
    const newValue = isMultiple ? computeMultipleOptionsValue(ev.target.value) : ev.target.value;
    
    setValues(newValue);
    onChange(question, newValue);
  }

  return question.answers.map(answer => (
    <CheckInputWrapper key={answer}>
      <CheckInput type={fieldType} id={answer} name={question.name} value={answer} onChange={onValueChange} />
      <CheckInputLabel htmlFor={answer}>{answer}</CheckInputLabel>
    </CheckInputWrapper>
  ));
}
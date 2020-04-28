import React, { useState } from 'react';

import { CheckInputWrapper, CheckInput, CheckInputLabel } from './styled';

export default function OptionQuestion({ question, onChange }) {
  const [values, setValues] = useState([]);
  const isMultiple = question.type === 'MULTIPLE_OPTION'; 
  const fieldType = isMultiple ? 'checkbox' : 'radio';
  

  const onValueChange = ev => {
    const selectedNewValue = ev.target.value;

    if (isMultiple) {
      if (values.includes(selectedNewValue)) {
        const newValues = values.filter(value => value !== selectedNewValue);

        setValues(newValues);
        return onChange(question.name, newValues);
      }

      const newValues = [...values, selectedNewValue];
      setValues(newValues);
      onChange(question.name, newValues);
    } else {
      onChange(question.name, selectedNewValue);
    }
  }

  return question.answers.map(answer => (
    <CheckInputWrapper key={answer}>
      <CheckInput type={fieldType} id={answer} name={question.name} value={answer} onChange={onValueChange} />
      <CheckInputLabel htmlFor={answer}>{answer}</CheckInputLabel>
    </CheckInputWrapper>
  ));
}
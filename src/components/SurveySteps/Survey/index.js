import React, { useState } from 'react';

import { SurveyWrapper, SubmitButton } from './styled'

import SurveyQuestion from 'components/SurveyQuestion';

export default function({ survey }) {
  const [values, setValues] = useState({});

  const onSubmit = ev => {
    ev.preventDefault();

    console.log(values);
  }

  const onFieldChange = (field, value) => {
    const newFormValues = {
      ...values,
      [field]: value,
    };

    setValues(newFormValues)
  }

  return (
    <SurveyWrapper onSubmit={onSubmit}>
      {survey.title && <h2>{survey.title}</h2>}
      {(survey.questions || []).map((question, index) => (
        <SurveyQuestion key={index} question={question} onAnswerChange={onFieldChange} />
      ))}
      <SubmitButton type="submit" value="Submit" />
    </SurveyWrapper>
  )
}
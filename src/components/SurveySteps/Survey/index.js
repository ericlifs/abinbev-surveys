import React, { useState } from 'react';

import { SurveyWrapper, SubmitButton, SurveyColumn, ResetButton } from './styled'

import SurveyQuestion from 'components/SurveyQuestion';

export default function({ survey, onFormSubmit, onSurveyReset }) {
  const [values, setValues] = useState({});

  const onSubmit = ev => {
    ev.preventDefault();

    onFormSubmit(values);
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
      <SurveyColumn>
        {survey.title && <h2>{survey.title}</h2>}
        {(survey.questions || []).map(question => (
          <SurveyQuestion key={question.name} question={question} onAnswerChange={onFieldChange} />
        ))}
        <SubmitButton type="submit" value="Submit" />
        <ResetButton as="button" onClick={onSurveyReset}>Reset</ResetButton>
      </SurveyColumn>
      <SurveyColumn code>
        <h2>Current values</h2>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </SurveyColumn>
    </SurveyWrapper>
  )
}
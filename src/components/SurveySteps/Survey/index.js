import React, { useState } from 'react';

import VALIDATORS from 'helpers/validators';

import SurveyQuestion from 'components/SurveyQuestion';

import { SurveyWrapper, SubmitButton, SurveyColumn, ResetButton } from './styled'

export default function({ survey, onFormSubmit, onSurveyReset }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = ev => {
    ev.preventDefault();

    onFormSubmit(values);
  }

  const validate = (question, value) => {
    const invalid = question.validators.find(validator => !VALIDATORS[validator].validate(value));

    const newFormErrors = {
      ...errors,
      [question.name]: invalid ? VALIDATORS[invalid].message : '',
    };

    setErrors(newFormErrors);
  }

  const onFieldChange = (question, value) => {
    const newFormValues = {
      ...values,
      [question.name]: value,
    };

    setValues(newFormValues);

    if (question.validators) {
      validate(question, value);
    }
  }

  return (
    <SurveyWrapper onSubmit={onSubmit}>
      <SurveyColumn>
        {survey.title && <h2>{survey.title}</h2>}
        {(survey.questions || []).map(question => (
          <SurveyQuestion
            key={question.name}
            question={question}
            onAnswerChange={onFieldChange}
            error={errors[question.name]}
          />
        ))}
        <SubmitButton type="submit" value="Submit" />
        <ResetButton as="button" onClick={onSurveyReset}>Reset</ResetButton>
      </SurveyColumn>
      <SurveyColumn code>
        <h2>Current values</h2>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>

        <h2>Current errors</h2>
        <pre>{JSON.stringify(errors, undefined, 2)}</pre>
      </SurveyColumn>
    </SurveyWrapper>
  )
}
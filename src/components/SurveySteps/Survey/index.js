import React, { useState } from 'react';

import VALIDATORS from 'helpers/validators';

import SurveyQuestion from 'components/SurveyQuestion';

import { SurveyWrapper, SubmitButton, SurveyColumn, ResetButton } from './styled'

export default function({ survey, onFormSubmit, onSurveyReset }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false)

  const isFormValid = () => {
    const errorsMessages = Object.values(errors);

    return errorsMessages.every(value => value.trim() === '');
  }

  const validate = (question, value) => {
    if (!question.validators) {
      return;
    }

    const invalid = question.validators.find(validator => {
      const validation = VALIDATORS[validator];

      return validation ? !validation.validate(value) : false;
    });

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
    validate(question, value);
  }

  const onSubmit = ev => {
    ev.preventDefault();

    setSubmitted(true);

    if (isFormValid()) {
      onFormSubmit(values);
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
            error={submitted && errors[question.name]}
            onAnswerChange={onFieldChange}
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
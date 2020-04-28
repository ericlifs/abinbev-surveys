import React, { useState, useEffect } from 'react';

import validateField from 'helpers/validators';

import SurveyQuestion from 'components/SurveyQuestion';

import { SurveyWrapper, SubmitButton, SurveyColumn, ResetButton, Title } from './styled'

export default function({ survey, onFormSubmit, onSurveyReset }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const newErrorsState = {};

    survey.questions.forEach(question => {
      const { name, validators } = question;

      newErrorsState[name] = validateField(validators, values[name]);
    });

    setErrors(newErrorsState);
  }, []);

  const isFormValid = () => {
    const errorsMessages = Object.values(errors);

    return errorsMessages.every(value => value.trim() === '');
  }

  const onFieldChange = (question, value) => {
    const newFormValues = {
      ...values,
      [question.name]: value,
    };

    setValues(newFormValues);

    if (question.validators) {
      const newFormErrors = {
        ...errors,
        [question.name]: validateField(question.validators, value),
      };

      setErrors(newFormErrors);
    }
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
        {survey.title && <Title>{survey.title}</Title>}
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
        <Title>Current values</Title>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>

        <Title>Current errors</Title>
        <pre>{JSON.stringify(errors, undefined, 2)}</pre>
        <Title as="h5">Errors are shown upon form submit</Title>
      </SurveyColumn>
    </SurveyWrapper>
  )
}
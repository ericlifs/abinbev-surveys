import React from 'react';

import { SurveyWrapper } from './styled'

import SurveyQuestion from 'components/SurveyQuestion';

export default function({ survey }) {
  const onSubmit = ev => {
    ev.preventDefault();
  }

  const onFieldChange = (field, value) => {
    console.log(field, value);
  }

  return (
    <SurveyWrapper onSubmit={onSubmit}>
      {survey.title && <h2>{survey.title}</h2>}
      {(survey.questions || []).map((question, index) => (
        <SurveyQuestion key={index} question={question} onChange={onFieldChange} />
      ))}
      <button type="submit"/>
    </SurveyWrapper>
  )
}
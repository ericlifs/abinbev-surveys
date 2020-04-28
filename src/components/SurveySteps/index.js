import React, { useState } from 'react'

import { emulateFetch } from 'helpers/promise';
import { toggleWithTimeout } from 'helpers/functions';

import SubmittingLoader from 'components/SubmittingLoader';
import FileUploader from './FileUploader';
import Survey from './Survey';
import FlashMessage from 'components/FlashMessage';

export default function() {
  const [fileContent, setFileContent] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!fileContent) {
    return <FileUploader onUpload={setFileContent} />
  }

  const onFormSubmit = async () => {
    setSubmitting(true);

    await emulateFetch(4000)

    setSubmitting(false);
    toggleWithTimeout(setSubmitted, true);
  }

  const onSurveyReset = () => {
    setFileContent(null);
  }

  return (
    <>
      <Survey survey={fileContent} onFormSubmit={onFormSubmit} onSurveyReset={onSurveyReset}/>
      {submitting && <SubmittingLoader>Submitting...</SubmittingLoader>}
      {submitted && <FlashMessage message="Thanks! Your survey was submitted correctly" />}
    </>
  );
}
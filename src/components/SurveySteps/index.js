import React, { useState } from 'react'

import SubmittingLoader from 'components/SubmittingLoader';
import FileUploader from './FileUploader';
import Survey from './Survey';

export default function() {
  const [fileContent, setFileContent] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!fileContent) {
    return <FileUploader onUpload={setFileContent} />
  }

  const onFormSubmit = values => {
    setSubmitting(true);

    // THIS MUST BE REPLACED WITH THE FETCH CALL TO THE REAL ENDPOINT

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  }

  const onSurveyReset = () => {
    setFileContent(null);
  }

  return (
    <>
      <Survey survey={fileContent} onFormSubmit={onFormSubmit} onSurveyReset={onSurveyReset}/>
      {submitting && <SubmittingLoader>Submitting...</SubmittingLoader>}
    </>
  );
}
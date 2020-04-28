import React, { useState } from 'react'

import FileUploader from './FileUploader';
import Survey from './Survey';

export default function() {
  const [fileContent, setFileContent] = useState(null);

  if (!fileContent) {
    return <FileUploader onUpload={setFileContent} />
  }

  return <Survey survey={fileContent} />;
}
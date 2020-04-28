import React, { useRef } from 'react';

import { validateFileExtension, readContentFromFile } from 'helpers/file';

import { FileUploaderWrapper, Title, Input, InputLabel } from './styled';

export default function({ onUpload }) {
  const inputEl = useRef(null);

  const onFileRead = content => {
    try {
      const parsedFile = JSON.parse(content)
      onUpload(parsedFile);
    } catch (err) {
      // TODO: Add showing flash message in here
      console.log(err);
    }
  }

  const onFileSelected = () => {
    const [file] = inputEl.current.files;

    if (validateFileExtension(file, 'json')) {
      readContentFromFile(file, onFileRead);
    }
  }

  return (
    <FileUploaderWrapper>
      <Title>Start by selecting your external JSON survey file</Title>
      <Input onChange={onFileSelected} ref={inputEl} type="file" id="file" accept=".json" />
      <InputLabel htmlFor="file">Choose your file</InputLabel>
    </FileUploaderWrapper>
  )
}
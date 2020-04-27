import React, { useRef } from 'react';

import { validateFileExtension, readContentFromFile } from 'helpers/file';

import { FileUploaderWrapper, Title, Input, InputLabel } from './styled';

export default function() {
  const inputEl = useRef(null);

  const onFileSelected = () => {
    const [file] = inputEl.current.files;

    if (validateFileExtension(file, 'json')) {
      readContentFromFile(file, content => {
        try {
          const parsed = JSON.parse(content);
          
        } catch (err) {
          // TODO: Add showing flash message in here
          console.log(err);
        }
      })
    }
  }

  return (
    <FileUploaderWrapper>
      <Title>Start by selecting your external JSON survey file</Title>
      <Input onChange={onFileSelected} ref={inputEl} type="file" id="file" accept=".json" />
      <InputLabel for="file">Choose your file</InputLabel>
    </FileUploaderWrapper>
  )
}
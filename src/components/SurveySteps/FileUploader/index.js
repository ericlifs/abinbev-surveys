import React, { useRef, useState } from 'react';

import { validateFileExtension, readContentFromFile } from 'helpers/file';

import FlashMessage, { MESSAGES_TYPES } from 'components/FlashMessage';

import { FileUploaderWrapper, Title, Input, InputLabel } from './styled';

export default function({ onUpload }) {
  const inputEl = useRef(null);
  const [error, setError] = useState(false);

  const showFlashError = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 4000);
  }

  const onFileRead = content => {
    try {
      const parsedFile = JSON.parse(content)
      onUpload(parsedFile);
    } catch (err) {
      showFlashError();
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
      {error && (
        <FlashMessage type={MESSAGES_TYPES.DANGER} message="ERROR: The file does not have a valid structure" />
      )}
    </FileUploaderWrapper>
  )
}
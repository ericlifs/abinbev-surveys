import React from 'react';

import { FileUploaderWrapper, Title, Input, InputLabel } from './styled';

export default function() {
  return (
    <FileUploaderWrapper>
      <Title>First select your external JSON survey file</Title>
      <Input type="file" id="file" accept=".json" />
      <InputLabel for="file">Choose your file</InputLabel>
    </FileUploaderWrapper>
  )
}
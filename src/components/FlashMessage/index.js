import React from 'react'

import theme from 'config/theme';

import { FlashMessageWrapper } from './styled';

export const MESSAGES_TYPES = {
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
};

const COLORS = {
  [MESSAGES_TYPES.SUCCESS]: theme.colors.japaneseLaurel,
  [MESSAGES_TYPES.DANGER]: theme.colors.redOrange,
}

export default function FlashMessage({ type = MESSAGES_TYPES.SUCCESS, message }) {
  return (
    <FlashMessageWrapper color={COLORS[type]}>
      {message}
    </FlashMessageWrapper>
  )
}
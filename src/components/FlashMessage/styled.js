import styled from 'styled-components'

export const FlashMessageWrapper = styled.div`
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 20%;
  right: 20%;
  border-top-right-radius: 11px;
  border-top-left-radius: 10px;
`
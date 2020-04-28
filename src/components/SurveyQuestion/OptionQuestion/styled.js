import styled from 'styled-components';

export const CheckInputWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

export const CheckInput = styled.input`
  margin-right: 20px;
`

export const CheckInputLabel = styled.label`
  font-size: 1.2rem;
`
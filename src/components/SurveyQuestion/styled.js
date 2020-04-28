import styled from 'styled-components';

export const TextInput = styled.input`
  padding: 10px;
  border-radius: 5px;
`;

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
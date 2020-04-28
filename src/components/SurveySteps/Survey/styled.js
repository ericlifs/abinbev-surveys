import styled from 'styled-components'

export const SurveyWrapper = styled.form`
  display: flex;
  flex: 1;
`;

export const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.colors.biscay };
  color: ${({ theme }) => theme.colors.white };
  font-size: 1rem;
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 6px;
  border: none;
`;

export const SurveyColumn = styled.div`
  background-color: ${({ theme, code }) => code ? theme.colors.gallery : theme.colors.white };
  padding: 40px;
  flex-grow: 1;

  ${({ code }) => code && `
    width: 400px;
    flex-grow: 0;
  `}
`

export const ResetButton = styled(SubmitButton)`
  background-color: ${({ theme }) => theme.colors.gallery};
  color: ${({ theme }) => theme.colors.biscay };
  margin-left: 20px;
`

export const Title = styled.h2``

export const Code = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
`
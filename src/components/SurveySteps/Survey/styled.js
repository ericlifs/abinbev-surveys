import styled from 'styled-components'

export const SurveyWrapper = styled.form`
  display: grid;
  grid-template-columns: .6fr .4fr;
`;

export const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.colors.biscay };
  color: ${({ theme }) => theme.colors.white };
  font-size: 1rem;
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 6px;
`;

export const SurveyColumn = styled.div`
  background-color: ${({ theme, code }) => code ? theme.colors.gallery : theme.colors.white };
  padding: 40px;
`
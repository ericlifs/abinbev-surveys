import styled from 'styled-components'

export const SurveyWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  margin: 40px auto;
`;

export const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.colors.biscay };
  color: ${({ theme }) => theme.colors.white };
  font-size: 1rem;
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 6px;
`;
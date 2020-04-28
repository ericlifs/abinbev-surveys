import styled from 'styled-components'

const SubmittingLoader = styled.div`
  background: ${({ theme }) => theme.colors.black}90;
  color: ${({ theme }) => theme.colors.white };
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SubmittingLoader;
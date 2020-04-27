import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
  }
`

export default GlobalStyles;
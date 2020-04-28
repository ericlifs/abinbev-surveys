import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.biscay };
  }

  input {
    font-family: 'Raleway', sans-serif;
  }
`

export default GlobalStyles;
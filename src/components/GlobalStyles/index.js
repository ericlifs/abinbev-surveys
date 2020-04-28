import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.biscay };
  }

  * {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }
`

export default GlobalStyles;
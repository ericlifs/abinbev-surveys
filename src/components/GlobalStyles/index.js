import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.biscay };
  }

  #root {
    flex-direction: column;
    min-height: 100vh;
    display: flex;
  }

  * {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }
`

export default GlobalStyles;
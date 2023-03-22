import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export const AppTheme = {
  ...colors,
}

export const GlobalStyles = createGlobalStyle`

  html, body {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${colors.grey900};
    font-family: 'Inter', sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.white};
    font-weight: 500;
  }`

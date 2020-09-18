import React from 'react'
import { createGlobalStyle } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

const BasicLayout = ({ children }: { children: any }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default BasicLayout

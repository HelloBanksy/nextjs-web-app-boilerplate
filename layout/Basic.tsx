import React from 'react'
import { createGlobalStyle } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: primary;
    font-size: 1rem;
  }

  p {
    color: secondary;
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

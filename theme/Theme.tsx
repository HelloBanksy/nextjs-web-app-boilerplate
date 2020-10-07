import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './defaultTheme'

type Props = {
  children: any
}

export const Theme = ({ children }: Props): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

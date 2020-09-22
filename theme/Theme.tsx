import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { theme } from './defaultTheme'

export const Theme = ({ children }): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

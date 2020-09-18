import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'

const theme = {
  colors: {
    primary: 'green',
  },
}

export const Theme = ({ children }): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

import React from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: pink,
  },
  typography: {
    // fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ThemeWrapper

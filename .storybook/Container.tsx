import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';
import { Box, CssReset } from '../src/components';

const Layout=({story, context}) => {
  return (
    <Box role="main" sx={{fontFamily: "body"}}>
      {story()}
    </Box>
  )
}

const Container= ({story, context }) => (
  <ThemeProvider theme={theme}>
    <Layout story={story} context={context}/>
  </ThemeProvider>
)


export default Container
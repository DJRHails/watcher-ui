import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/theme';

const Layout=({story, context}) => {
  return (
    <div role="main">
      {story()}
    </div>
  )
}

const Container= ({story, context }) => (
  <ThemeProvider theme={theme}>
    <Layout story={story} context={context}/>
  </ThemeProvider>
)


export default Container
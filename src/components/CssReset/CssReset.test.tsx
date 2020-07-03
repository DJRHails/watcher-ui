import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

import { CssReset } from './CssReset'

describe('Css Reset component sanity', () => {
  it('has name', () => {
    expect(CssReset.displayName).toBe('CssReset')
  })

  it('matches default snapshot', () => {
    const component = render(<CssReset />)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <CssReset />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
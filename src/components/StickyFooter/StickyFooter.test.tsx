import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

import { StickyFooter } from './StickyFooter'

const stickyFooter = (
  <StickyFooter
    footer={<footer/>}
  >
    Foo
  </StickyFooter>
)

describe('Sticky Footer component sanity', () => {
  it('has name', () => {
    expect(StickyFooter.displayName).toBe('StickyFooter')
  })

  it('matches default snapshot', () => {
    const component = render(stickyFooter)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        {stickyFooter}
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
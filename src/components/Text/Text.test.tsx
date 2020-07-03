import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

import { Text } from './Text'

describe('Text component sanity', () => {
  it('has name', () => {
    expect(Text.displayName).toBe('Text')
  })

  it('matches default snapshot', () => {
    const component = render(<Text />)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
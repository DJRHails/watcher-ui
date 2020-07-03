import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

import { Image } from './Image'

describe('Image component sanity', () => {
  it('has name', () => {
    expect(Image.displayName).toBe('Image')
  })

  it('matches default snapshot', () => {
    const component = render(<Image src="someImage"/>)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Image src="someImage" />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
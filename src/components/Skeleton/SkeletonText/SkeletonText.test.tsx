import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '/themes/theme'

import { SkeletonText } from './SkeletonText'

describe('Skeleton Text component sanity', () => {
  it('has name', () => {
    expect(SkeletonText.displayName).toBe('SkeletonText')
  })

  it('matches default snapshot', () => {
    const component = render(<SkeletonText />)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <SkeletonText />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
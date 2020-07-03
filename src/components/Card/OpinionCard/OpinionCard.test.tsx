import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../themes/theme'

import { OpinionCard } from './OpinionCard'

describe('Opinon Card component sanity', () => {
  it('has name', () => {
    expect(OpinionCard.displayName).toBe('OpinionCard')
  })

  it('matches default snapshot', () => {
    const component = render(<OpinionCard />)
    expect(component).toMatchSnapshot()
  })

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <OpinionCard />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Circle } from './Circle';

describe('Circle component sanity', () => {
  it('has name', () => {
    expect(Circle.displayName).toBe('Circle');
  });

  it('matches default snapshot', () => {
    const component = render(<Circle />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Circle />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
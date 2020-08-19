import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Portal } from './Portal';

describe('Portal component sanity', () => {
  it('has name', () => {
    expect(Portal.displayName).toBe('Portal');
  });

  it('matches default snapshot', () => {
    const component = render(<Portal />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Portal />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
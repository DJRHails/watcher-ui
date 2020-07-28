import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Pill } from './Pill';

describe('Pill component sanity', () => {
  it('has name', () => {
    expect(Pill.displayName).toBe('Pill');
  });

  it('matches default snapshot', () => {
    const component = render(<Pill>#tag</Pill>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Pill>#tag</Pill>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

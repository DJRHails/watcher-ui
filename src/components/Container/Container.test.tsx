import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Container } from './Container';

describe('Container component sanity', () => {
  it('has name', () => {
    expect(Container.displayName).toBe('Container');
  });

  it('matches default snapshot', () => {
    const component = render(<Container />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
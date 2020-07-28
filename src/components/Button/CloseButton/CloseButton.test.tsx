import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { CloseButton } from './CloseButton';

describe('Close Button component sanity', () => {
  it('has name', () => {
    expect(CloseButton.displayName).toBe('CloseButton');
  });

  it('matches default snapshot', () => {
    const component = render(<CloseButton />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <CloseButton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
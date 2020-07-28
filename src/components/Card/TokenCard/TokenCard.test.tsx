import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/theme';

import { TokenCard } from './TokenCard';

describe('TokenCard component sanity', () => {
  it('has name', () => {
    expect(TokenCard.displayName).toBe('TokenCard');
  });

  it('matches default snapshot', () => {
    const component = render(<TokenCard name="Eth" value={20} quantity={2}/>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <TokenCard name="Mkr" value={20} quantity={2}/>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
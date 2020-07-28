import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Nifty } from './Nifty';

const MINIMAL_NIFTY_PROPS = {
  id: 0,
  data: {
    src: 'internal://',
    assetName: 'Artifact',
    assetId: 16,
    owner: '0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE'
  },
  platform: 'eth' 
} as const;

describe('Nifty component sanity', () => {
  it('has name', () => {
    expect(Nifty.displayName).toBe('Nifty');
  });

  it('matches default snapshot', () => {
    const component = render(<Nifty {...MINIMAL_NIFTY_PROPS}/>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Nifty {...MINIMAL_NIFTY_PROPS}/>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
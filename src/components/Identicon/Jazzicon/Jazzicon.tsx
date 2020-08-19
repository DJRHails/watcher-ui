import React, { FC, useEffect, useRef } from 'react';
import jazzicon from 'jazzicon';
import { Box, BoxProps } from '../..';

export interface JazziconProps extends BoxProps {
  seed: number;
  diameter?: number;
} 

// Jazzicon library returns a HTMLDivElement, so needs wrapping
export const Jazzicon: FC<JazziconProps> = ({
  seed,
  diameter = 46,
  ...rest
}: JazziconProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) { return; }

    const { children } = container.current;
    for (let i = 0; i < children.length; i++) {
      container.current.removeChild(children[i]);
    }

    const image = jazzicon(diameter, seed);
    container.current.appendChild(image);
  }, [seed, diameter]);

  return (
    <Box
      ref={container}
      {...rest}
    />
  );
};
Jazzicon.displayName='Jazzicon';

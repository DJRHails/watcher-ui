import React, { useEffect, useRef } from "react";
import jazzicon from "jazzicon";
import { Box, BoxProps } from "../..";

export interface JazziconProps extends BoxProps {
  address: string;
  diameter?: number;
} 

function seedFromEthAddress(address: string): number {
  const addr = address.slice(2, 10); // Removes 0x and takes first 10.
  const seed = parseInt(addr, 16);
  return seed;
}

// Jazzicon library returns a HTMLDivElement, so needs wrapping
export const Jazzicon: React.FC<JazziconProps> = ({
  address,
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

    const image = jazzicon(diameter, seedFromEthAddress(address));
    container.current.appendChild(image);
  }, [address, diameter]);

  return (
    <Box
      ref={container}
      {...rest}
    />
  );
};
Jazzicon.displayName="Jazzicon";
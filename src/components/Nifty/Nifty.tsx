import React, { FC } from 'react';
import { box, Box, BoxProps, Image, WithPlatform, AspectRatio, Heading, Flex } from '/components';
import styled from 'styled-components';
import { BoxShadowProps, boxShadow } from 'styled-system';
import { PlatformDefiniton } from '../Platform/Platform';

// TODO: Migrate address to external
export type Address = string;

export interface AssetMetadata {
  assetName: string;
  assetId: number | Address; // The asset identifier
  owner: Address;
  assetTicker?: string;
  creator?: Address;
  manager?: Address; // Only set on Algorand
  reserve?: Address; // Only set on Algorand
  freeze?: Address; // Only set on Algorand
  clawback?: Address; // Only set on Algorand
}

export interface NiftyMetadata extends AssetMetadata {
  src: string; // Source of Metadata e.g. IPFS hash
  img?: string;
  bg?: string;
  name?: string;
}

export interface NiftyProps extends BoxProps, BoxShadowProps {
  id: number;
  data: NiftyMetadata;
  platform: PlatformDefiniton;
  flipped?: true;
  children?: React.ReactNode;
}

const StyledNifty = styled.div<BoxProps & BoxShadowProps>`
  ${box}
  ${boxShadow}
`;

export const Nifty: FC<NiftyProps> = ({
  id,
  data,
  platform,
  flipped,
  children,
}: NiftyProps) => {
  return (
    <StyledNifty
      width="full"
      maxWidth="md"
      mx="auto"
      boxShadow="xl"
    >
      <Box fontSize="5rem">
        <WithPlatform allowOverlap flipped={flipped} platform={platform}>
          <AspectRatio maxWidth="full">
            {data.img 
              ? <Image
                height="full"
                bg={data.bg || 'surface'}
                src={data.img}
              />
              : <Box width="full" bg={data.bg || 'surface'}/>
            }
          </AspectRatio>
        </WithPlatform>
      </Box>
      <Box px={3} py={5}>
        <Heading.h4>{data.name}</Heading.h4>
        <Heading.h5 color="muted">{data.assetName} #{id}</Heading.h5>
      </Box>
      <hr/>
      <Flex>
        <Flex>
          
        </Flex>
      </Flex>

      {children}
    </StyledNifty>
  );
};
Nifty.displayName='Nifty';

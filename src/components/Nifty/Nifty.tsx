import React, { FC } from 'react';
import { box, Box, BoxProps, Image, WithPlatform, AspectRatio, Heading, Flex, Badge } from '/components';
import styled from 'styled-components';
import { BoxShadowProps, boxShadow } from 'styled-system';
import { getIconBackgroundColor, PlatformDefiniton } from '../Platform/Platform';

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
  src?: string; // Source of Metadata e.g. IPFS hash
  img?: string;
  bg?: string;
  name?: string;
}

export interface NiftyProps extends BoxProps, BoxShadowProps {
  data: NiftyMetadata;
  platform: PlatformDefiniton;
  id?: number;
  trackerId?: string;
  trackerExplorer?: string;
  flipped?: true;
  className?: string;
  children?: React.ReactNode;
  ratio?: number;
}

const StyledNifty = styled.div<BoxProps & BoxShadowProps>`
  ${box}
  ${boxShadow}
`;

export const Nifty: FC<NiftyProps> = ({
  id,
  data,
  trackerId,
  platform,
  flipped,
  children,
  className,
  trackerExplorer,
  ratio = 1 / 1,
}: NiftyProps) => {
  return (
    <StyledNifty
      width="full"
      maxWidth="md"
      mx="auto"
      boxShadow="xl"
      className={className}
    >
      <Box fontSize="5rem">
        <WithPlatform allowOverlap flipped={flipped} platform={platform}>
          <AspectRatio ratio={ratio} maxWidth="full">
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
        <Heading.h4>
          <Flex justify="space-between">
            {data.name}
            {trackerId &&
              <Badge
                variantColor={getIconBackgroundColor(platform) as any}
                href={trackerExplorer}
                onClick={() => trackerExplorer && window.open(trackerExplorer, '_blank')}
              >
                {trackerId}
              </Badge>
            }
          </Flex>
        </Heading.h4>
        <Heading.h5 color="muted">{data.assetName}{id ? ` #${id}` : ''}</Heading.h5>
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

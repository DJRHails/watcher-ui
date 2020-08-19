import React, { ReactNode } from 'react';
import { Flex, Box } from '/components';

export interface StickyFooterProps {
  footer: ReactNode;
  children: ReactNode;
} 

export const StickyFooter: React.FC<StickyFooterProps> = ({
  footer,
  children,
}: StickyFooterProps) => (
  <>
    <Flex
      direction="column"
      align="unset"
      height="full"
    >
      <Box as="main" sx={{
        flex: '1 0 auto',
      }}>
        {children}
      </Box>
      <Box
        as="footer"
        sx={{
          flexShrink: 0,
        }}
      >
        {footer}
      </Box>
    </Flex>
  </>
);
StickyFooter.displayName='StickyFooter';

import React, { PropsWithChildren } from 'react';
import { Card, CardProps } from '../Card';
import { Heading, Pill, AspectRatio, Icon, Flex, Box } from '../..';

export type OpinionVariants = 'do' | 'dont';

export interface WithOpinionVariant {
  variant?: OpinionVariants
}

export const CircleWithEmphasis: React.FC<WithOpinionVariant> = ({
  variant
}: WithOpinionVariant) => {
  const bgColor = (variant === 'dont' ? 'red' : 'green');
  const color = (variant === 'dont' ? 'danger' : 'success');
  const icon = (variant === 'dont' ? 'Close' : 'Check');

  return <Box width={12}>
    <AspectRatio ratio={1}>
      <Pill
        width="full"
        mb={3}
        borderRadius="full"
        color={bgColor}
        p={2}
      >
        <Pill
          height="full"
          width="full"
          borderRadius="full"
          borderColor={color}
          borderWidth={2}
          borderStyle="solid"
          p={0}
          color="white"
        >
          <Icon name={icon} size="1.25rem" color={color} m="auto" />
        </Pill>
      </Pill>
    </AspectRatio>
  </Box>;
};

export interface OpinionCardProps extends WithOpinionVariant, Omit<CardProps, 'variant'> {} 

export const OpinionCard: React.FC<OpinionCardProps> = ({
  variant,
  children,
  ...rest
}: PropsWithChildren<OpinionCardProps>) => {
  return (
    <Card
      width="auto"
      maxWidth="md"
      mx="auto"
      borderTop="4px solid"
      borderTopColor={variant === 'dont' ? 'danger' : 'green'}
      {...rest}
    >
      <Flex alignItems="center" mb={4}>
        <CircleWithEmphasis variant={variant}/>   
        <Heading.h5 ml={3}>{variant === 'dont' ? 'Don\'t' : 'Do'}</Heading.h5> 
      </Flex>

      {children}
    </Card>
  );
};
OpinionCard.displayName='OpinionCard';

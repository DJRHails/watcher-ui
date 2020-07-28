import React from 'react';
import { Skeleton, SkeletonProps } from '../Skeleton';
import _ from 'lodash';
import { Box } from '/components';

export interface SkeletonTextProps extends SkeletonProps {
  noOfLines?: number;
  spacing?: SkeletonProps['margin'];
  skeletonHeight?: SkeletonProps['height'];
} 

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  noOfLines = 3,
  spacing = '0.5rem',
  skeletonHeight = '0.5rem',
  startColor,
  endColor,
  ...rest
}: SkeletonTextProps) => {
  const numbers = _.range(noOfLines);

  const getWidth = (index: number) => {
    if (noOfLines > 1) {
      return index === noOfLines - 1 ? '80%' : '100%';
    }
    return '100%';
  };
  return (
    <Box css={{ cursor: 'progress' }}{...rest}>
      {numbers.map((number) => (
        <Skeleton
          key={number}
          height={skeletonHeight}
          mb={number === noOfLines - 1 ? '0' : spacing}
          width={getWidth(number)}
          startColor={startColor}
          endColor={endColor}
        />
      ))}
    </Box>
  );
};
SkeletonText.displayName='SkeletonText';

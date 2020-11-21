import React from 'react';
import { Heading, Box, Text, Flex } from '/components';
import theme, { colors } from '/themes/theme';
import _ from 'lodash';

type Color = keyof typeof theme['colors']

export interface ColorProps {
  color: Color;
  withValue?: true;
}

export const Color: React.FC<ColorProps> = ({ color, withValue }: ColorProps) => {
  if (withValue) {
    return (
      <Heading.h4>
        <Flex>
          <Box
            sx={{
              backgroundColor: color,
              display: 'inline-block',
              marginRight: '0.5em',
              borderRadius: '3px',
              width: '2em',
              height: '2em',
              boxShadow: 'md',
            }}
          />
          <Flex direction="column" alignSelf="center">
            <Text>{color}</Text>
            <Text fontSize=".8em" fontWeight="light">{_.get(colors, color) || 'undefined'}</Text>
          </Flex>
        </Flex>
      </Heading.h4>
    );
  }
  return (
    <Heading.h4>
      <Box
        sx={{
          backgroundColor: color,
          display: 'inline-block',
          marginRight: '0.5em',
          borderRadius: '3px',
          width: '0.9em',
          height: '0.9em',
        }} />
      {color}
    </Heading.h4>
  );
};

export const AllColors: React.FC = () => {
  return (<>
    {Object.keys(colors).filter((c) => typeof colors[c as keyof typeof colors] === 'string').map((color) => <Color key={color} color={color as Color} withValue />)}
  </>);
};
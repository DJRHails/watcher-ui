import { BoxProps, Box } from '../Box' // TODO: This cannot be "/components" for some unknown reason
import styled from 'styled-components'
import { variant, BackgroundProps, background, typography, TypographyProps } from 'styled-system'

export type TextVariants = 'heading' | 'body' | 'button' | 'gradient';

export interface TextProps extends BoxProps, TypographyProps, BackgroundProps {
  uppercase?: true;
  truncate?: true;
  variant?: TextVariants;
}

const textVariants = variant({
  variants: {
    body: {
      fontFamily: 'body',
      fontSize: 1,
    },
    button: {
      position: 'relative',
      fontSize: 1,
      fontWeight: 'bold',
      zIndex: 1,
      userSelect: 'none',
      pointerEvents: 'none',
    },
    gradient: {
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }
  },
})

export const Text = styled(Box)<TextProps>`
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
  ${({ truncate }) => truncate && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  ${textVariants}
  ${background}
  ${typography}
`
Text.displayName='Text'
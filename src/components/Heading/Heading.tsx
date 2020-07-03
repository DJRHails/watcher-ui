import React, { FC } from 'react'
import { Text, TextProps } from '../Text'

export interface HeadingProps
  extends TextProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextProps> {
}

const TextHeading: FC<HeadingProps> = (props) => (
  <Text
    fontFamily="body"
    fontWeight="bold"
    lineHeight="none"
    {...props}
  />
)

const h1: FC<HeadingProps> = (props) => (
  <TextHeading
    fontSize={6}
    fontWeight="light"
    pb={4}
    ml="-0.058em"
    as="h1"
    {...props}
  />
)
h1.displayName = 'Heading.h1'

const h2: FC<HeadingProps> = (props) => (
  <TextHeading
    fontSize={5}
    as="h2"
    {...props}
  />
)
h2.displayName = 'Heading.h2'

const h3: FC<HeadingProps> = (props) => (
  <TextHeading
    as="h3"
    fontSize={4}
    mt={4}
    mb={3}
    {...props}
  />
)
h3.displayName = 'Heading.h3'

const h4: FC<HeadingProps> = (props) => (
  <TextHeading
    fontSize={3}
    mt={2}
    as="h4"
    {...props}
  />
)
h4.displayName = 'Heading.h4'

const h5: FC<HeadingProps> = (props) => (
  <TextHeading
    fontSize={2}
    mt={1}
    as="h5"
    {...props}
  />
)
h5.displayName = 'Heading.h5'


export const Heading = {
  h1,
  h2,
  h3,
  h4,
  h5,
}
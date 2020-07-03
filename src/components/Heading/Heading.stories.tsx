import React from 'react'
import { Heading } from './Heading'
import { StoryMeta } from '/types/storybook'

export default {
  title: 'Components/Heading',
  component: Heading
}

export const h1: StoryMeta = () => <Heading.h1>Heading h1</Heading.h1>

export const headingsList: StoryMeta = () => (
  <>
    <Heading.h1>H1 - Quick zephyrs blow, vexing daft Jim.</Heading.h1>
    <Heading.h2>H2 - Quick zephyrs blow, vexing daft Jim.</Heading.h2>
    <Heading.h3>H3 - Quick zephyrs blow, vexing daft Jim.</Heading.h3>
    <Heading.h4>H4 - Quick zephyrs blow, vexing daft Jim.</Heading.h4>
    <Heading.h5>H5 - Quick zephyrs blow, vexing daft Jim.</Heading.h5>
  </>
)
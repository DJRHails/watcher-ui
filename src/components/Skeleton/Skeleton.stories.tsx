import React from 'react'
import { KindMeta, StoryMeta } from '/types/storybook'

import { Skeleton, SkeletonCircle } from './Skeleton'

const story: KindMeta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  subcomponents: [SkeletonCircle]
}

export const basic: StoryMeta = () => (
  <Skeleton height="20px"/>
)

export const stack: StoryMeta = () => (
  <>
    <Skeleton height="20px" my="10px" />
    <Skeleton height="20px" my="10px" />
    <Skeleton height="20px" my="10px" />
  </>
)

export const asContainer: StoryMeta = () => (
  <Skeleton>
    <div>contents wrapped</div>
    <div>won&apos;t be visible</div>
  </Skeleton>
)

export const asCircle: StoryMeta = () => (
  <SkeletonCircle/>
)


export const withFade: StoryMeta = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1000)
  }, [])

  return (
    <Skeleton hasLoaded={hasLoaded}>
      <span>Chakra ui is cool</span>
    </Skeleton>
  )
}

export const withCustomColor: StoryMeta = () => (
  <Skeleton
    speed={2}
    height="1rem"
    m={2}
    startColor="#d9d9d9"
    endColor="#ecebeb"
  />
)

export const withCustomSpeed: StoryMeta = () => (
  <Skeleton size="100px" speed={2.4} borderRadius="100px" />
)


export default story
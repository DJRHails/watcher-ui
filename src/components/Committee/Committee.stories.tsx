import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Committee, MemberRating } from './Committee';
import _, { sample } from 'lodash';
import { randomEthereumAddress } from '/utils/eth';
import { withKnobs, number } from '@storybook/addon-knobs';

const story: KindMeta<typeof Committee> = {
  title: 'Components/Committee',
  component: Committee,
  decorators: [withKnobs],
};

const randomRating = (): MemberRating => {
  const ratings = ['approve', 'reject', 'pending'];

  return sample(ratings) as MemberRating;
};

const memberList = (n: number) => _.times(n, (_) => ({
  name: 'Daniel',
  address: randomEthereumAddress(),
  rating: randomRating(),
}));

export const five: StoryMeta = () => (
  <Committee members={memberList(5)}/>
);

export const withVerification: StoryMeta = () => (
  <Committee
    members={memberList(5)}
    withFlags
  />
);

export const setCommitteeSize: StoryMeta = () => {
  const committeeSize = number('Committee Size', 10, {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  });
  const committeeDiameter = number('Committee Diameter', 100, {
    range: true,
    min: 50,
    max: 500,
    step: 5,
  });
  const padding = number('Padding', 10, {
    range: true,
    min: 0,
    max: 100,
    step: 5,
  });
  return (
    <Committee
      members={memberList(committeeSize)}
      committeeDiameter={committeeDiameter}
      padding={padding}
    />
  );
};

export const custom: StoryMeta = () => {
  const committeeSize = number('Committee Size', 10, {
    range: true,
    min: 0,
    max: 20,
    step: 1,
  });

  const memberDiameter = number('Member Diameter', 50, {
    range: true,
    min: 10,
    max: 300,
    step: 5,
  });
  const padding = number('Padding', 10, {
    range: true,
    min: 0,
    max: 100,
    step: 5,
  });
  return (
    <Committee
      members={memberList(committeeSize)}
      memberDiameter={memberDiameter}
      padding={padding}
    />
  );
};

export default story;
import React, { FC } from 'react';
import styled from 'styled-components';
import { Circle, Icon } from '..';
import { WithIcon } from '../Icon/WithIcon';
import { Identicon } from '/components/Identicon';
import { isUndefined } from '/utils/assertions';

interface StyledMemberProps {
  i: number;
}

const StyledMember = styled.div<StyledMemberProps>`
  ${({ i }) => i != undefined && `--i: ${i};`}
  position: absolute;
  top: 50%;
  left: 50%;
  margin: calc(-.5*var(--diameter));
  width: var(--diameter);
  height: var(--diameter);
  border-radius: 50%;
  --az: calc(var(--i) * 1turn / var(--n));
  transform: rotate(var(--az)) 
    translate(calc(.5*var(--committeeDiameter))) 
    rotate(calc(-1*var(--az)));
  counter-reset: i var(--i);
`;

interface StyledCommitteeProps {
  n: number;
  diameter: number;
  memberDiameter: number;
}

const StyledCommittee = styled.div<StyledCommitteeProps>`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ n }) => n && `--n: ${n};`}
  ${({ memberDiameter: d }) => d && `--diameter: ${d}px;`}
  ${({ diameter: d }) => d && `--committeeDiameter: ${d}px;`}
`;

export type MemberRating = 'approve' | 'reject' | 'pending';

export interface Member {
  name: string;
  address: string;
  rating: MemberRating;
}

function nameFromRating(rating: MemberRating): string {
  return {
    'approve': 'CheckCircle',
    'reject': 'Cancel',
    'pending': 'DoNotDisturbOn',
  }[rating];
}

function colorFromRating(rating: MemberRating): string {
  return {
    'approve': 'success',
    'reject': 'danger',
    'pending': 'warning',
  }[rating];
}

export interface CommitteeProps {
  members: Member[];
  memberDiameter?: number;
  committeeDiameter?: number;
  padding?: number;
  withFlags?: boolean;
}

export const Committee: FC<CommitteeProps> = ({
  members,
  committeeDiameter,
  memberDiameter,
  withFlags = false,
  padding = 5,
}: CommitteeProps) => {
  const n = members.length;
  if (isUndefined(memberDiameter) && isUndefined(committeeDiameter)) {
    committeeDiameter = 200;
  }
  if (committeeDiameter && isUndefined(memberDiameter)) {
    memberDiameter = (committeeDiameter * Math.PI - (n - 1) * padding) / n;
    // Jazzicon has a maximum diameter of 100.
    memberDiameter = Math.min(100, memberDiameter);
  }
  if (memberDiameter && isUndefined(committeeDiameter)) {
    committeeDiameter = (memberDiameter * n + (n - 1) * padding) / Math.PI;
  }

  if(isUndefined(memberDiameter) || isUndefined(committeeDiameter)) {
    return null;
  }

  const Inner = ({mem}: {mem: Member}) => withFlags ? (
    <WithIcon
      fontSize={`${memberDiameter as number * 0.75}px`} icon={
        <Circle width={`${memberDiameter as number * 0.5}px`} bg="background">
          <Icon
            name={nameFromRating(mem.rating)}
            color={colorFromRating(mem.rating)}
          />
        </Circle>
      }
      offset={{
        top: -1.25,
        right: 0.55,
      }}
    >
      <Identicon address={mem.address} diameter={memberDiameter}/>
    </WithIcon>
  ) : <Identicon address={mem.address} diameter={memberDiameter}/>;

  return (
    <StyledCommittee
      n={n}
      diameter={committeeDiameter}
      memberDiameter={memberDiameter}
    >
      {members.map((mem, idx) => 
        <StyledMember key={idx} i={idx} title={mem.name}>
          <Inner mem={mem}/>
        </StyledMember>
      )}
    </StyledCommittee>
  );
};
Committee.displayName='Committee';

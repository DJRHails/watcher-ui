import React, { ReactNode } from "react";
import { Box, BoxProps } from "/components";
import styled, { keyframes, css as styledcss, Keyframes } from "styled-components";
import { get } from "styled-system";

export interface SkeletonProps extends BoxProps {
  startColor?: string;
  endColor?: string;
  hasLoaded?: boolean;
  speed?: number;
  fadeDuration?: number;
  children?: ReactNode;
} 

const getColor = (theme: SkeletonProps["theme"], color?: string) => get(get(theme ?? {}, "colors"), color ?? "", color ?? "");

const frame = ({theme, startColor, endColor}: SkeletonProps): Keyframes => keyframes`
  from {
    border-color: ${getColor(theme, startColor)};
    background: ${getColor(theme, startColor)};
  }
  to {
    border-color: ${getColor(theme, endColor)};
    background: ${getColor(theme, endColor)};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSkeleton = styled(Box)<SkeletonProps>`
  animation: ${({speed}) => speed}s linear infinite alternate ${frame};
  box-shadow: none;
  ${(borderRadius) => !borderRadius && "border-radius: 2px;"}
  background-clip: padding-box;
  cursor: progress;
  ${({children}) => children && "width: fit-content;"}
  &::before, &::after, * {
    visibility: hidden;
  }
`;

export const Skeleton = React.forwardRef((
  {
    startColor = "#EDF2F7",
    endColor = "#A0AEC0",
    hasLoaded,
    fadeDuration = 0.4,
    speed = 0.8,
    ...rest
  }: SkeletonProps,
  ref
) => {
  if (hasLoaded) {
    return (
      <Box
        ref={ref}
        // TODO: Fix this
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        css={styledcss`animation: ${fadeIn} ${fadeDuration}s;` as any}
        {...rest}
      />
    );
  }

  return (
    <StyledSkeleton
      ref={ref}
      startColor={startColor}
      backgroundColor={endColor}
      speed={speed}
      {...rest}
    />
  );
});
Skeleton.displayName="Skeleton";

export const SkeletonCircle = React.forwardRef(({
  size = "2rem",
  ...rest
}: SkeletonProps, ref) => (
  <Skeleton ref={ref} borderRadius="full" size={size} {...rest}/>
));
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';


declare module 'storybook' {
  export function css(input?: SystemStyleObject): styleFn;
}
export type StoryId = string;
export type StoryKind = string;
export type StoryName = string;

export type StoryFnType<Context, ReturnType> = (context?: Context) => ReturnType;


export interface KindMeta<
  Component = unknown
> {
  id?: StoryId;
  title: StoryKind;
  component?: Component;
  subcomponents?: Record<string, any>;
  decorators?: StoryFnType[]
}

export interface StoryMeta {
  (): ReactNode;
  story?: {
    name: string
  }
}
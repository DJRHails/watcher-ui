import { ReactNode } from "react";

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
  subcomponents?: Record<string, Component>;
  decorators?: StoryFnType[]
}

export interface StoryMeta {
  (): ReactNode;
  story?: {
    name: string
  }
}
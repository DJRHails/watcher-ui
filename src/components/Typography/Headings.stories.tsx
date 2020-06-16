import React from "react";
import { Heading } from "./Headings";
import { StoryMeta } from "../../types/storybook";

export default {
  title: "Components/Typography/Heading",
  component: Heading
};

export const h1: StoryMeta = () => <Heading.h1>Heading h1</Heading.h1>;

export const headingsList: StoryMeta = () => (
  <>
    <Heading.h1>Heading h1</Heading.h1>
    <Heading.h2>Heading h2</Heading.h2>
    <Heading.h3>Heading h3</Heading.h3>
    <Heading.h4>Heading h4</Heading.h4>
    <Heading.h5>Heading h5</Heading.h5>
  </>
);
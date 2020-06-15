import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Pill } from "../Pill";
import { StoryMeta } from "../../types/storybook";

export default {
  title: "Components/Pill",
  component: Pill,
  decorators: [withKnobs],
};

export const Brand: StoryMeta = () => (
  <Pill>{text("Pill Text", "Brand")}</Pill>
);
export const Success: StoryMeta = () => (
  <Pill>{text("Pill Text", "Success")}</Pill>
);
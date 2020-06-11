// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

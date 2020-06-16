import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Link } from "../Link";

const story: KindMeta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export const standard: StoryMeta = () => (
  <Link>Link</Link>
);

export default story;
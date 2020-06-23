import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { Main } from "../src/components";

// Add Addon Decorators
addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator(story => <Main>{story()}</Main>);

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      let order = ["Intro", ["Welcome", "Colours"], "Components", "Recipies"];

      // Examine each part of the story kind in turn.
      const storyKindA = a[1].kind.split("/");
      const storyKindB = b[1].kind.split("/");
      let depth = 0;
      while (storyKindA[depth] || storyKindB[depth]) {
        // Stories with a shorter depth should go first.
        if (!storyKindA[depth]) {
          return -1;
        }
        if (!storyKindB[depth]) {
          return 1;
        }

        // Compare the next part of the story kind.
        const nameA = storyKindA[depth];
        const nameB = storyKindB[depth];
        if (nameA !== nameB) {
          // Look for the names in the given `order` array.
          let indexA = order.indexOf(nameA);
          let indexB = order.indexOf(nameB);

          // If at least one of the names is found, sort by the `order` array.
          if (indexA !== -1 || indexB !== -1) {
            // If one of the names is not found in `order`, list it last.
            if (indexA === -1) {
              indexA = order.length;
            }
            if (indexB === -1) {
              indexB = order.length;
            }

            return indexA - indexB;
          }

          return 0;
        }

        // If a nested array is provided for a name, use it for ordering.
        const index = order.indexOf(nameA);
        order =
          index !== -1 && Array.isArray(order[index + 1])
            ? order[index + 1]
            : [];

        // We'll need to look at the next part of the name.
        depth += 1;
      }

      // Identical story kinds. The shortcut at the start of this function prevents
      // this from ever being used.
      return 0;
    }
  }
});

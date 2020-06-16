import React from "react";
import { Heading, Box } from "../../components";
import theme from "../../themes/theme";

export interface ColorProps {
  color: keyof typeof theme["colors"];
}

export const Color: React.FC<ColorProps> = ({ color }: ColorProps) => (
  <Heading.h4>
    <Box
      sx={{
        backgroundColor: color,
        display: "inline-block",
        marginRight: "0.5em",
        borderRadius: "3px",
        width: "0.9em",
        height: "0.9em",
      }}
    />
    {color}
  </Heading.h4>
);
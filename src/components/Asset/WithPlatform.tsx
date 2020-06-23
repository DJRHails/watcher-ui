import React, { ReactNode } from "react";
import { Box, Icon, IconProps } from "..";

export interface WithPlatformProps extends IconProps {
  children: ReactNode;
}

export const WithPlatform: React.FC<WithPlatformProps> = ({
  name,
  children,
  size,
  fontSize,
  ...rest
}: WithPlatformProps) => {
  if (React.Children.count(children) !== 1) {
    console.error("Invalid number of children for WithPlatform");
    return null;
  }

  const borderWidth = .15;
  const scale = 0.6;
  const offset = {
    top: 0.35,
    right: 0.55,
  };

  return (
    <Box sx={{
      position: "relative",
      width: "max-content",
      // Ensure the Platform icon doesn't overlap
      marginTop: `${(offset.top - borderWidth) * scale}em`,
      marginRight: `${(offset.right - borderWidth) * scale}em`,
    }}
    fontSize={fontSize || size || "1em"}
    >
      {children}
      <Icon
        size="1em"
        fontSize={`${scale}em`}
        sx={{
          borderRadius: "99999px",
          borderStyle: "solid",
          borderColor: "background",
          borderWidth: `${borderWidth}em`,
          position: "absolute",
          right: `-${offset.right}em`,
          top: `-${offset.top}em`,
          zIndex: 2
        }}
        name={name}
        {...rest}
      />
    </Box>
  );
};

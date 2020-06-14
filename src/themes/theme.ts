// Reference: https://github.com/ConsenSys/rimble-ui/blob/master/src/theme.js
// Reference: https://github.com/styled-system/styled-system/blob/master/docs/src/gatsby-plugin-theme-ui/index.js
// Reference Tailwind: https://github.com/system-ui/theme-ui/blob/76207a732fba4da145abf9535f33704b8811546c/packages/preset-tailwind/src/index.ts

export const coreButtonStyles = {
  py: 2,
  px: 3,
  cursor: "pointer",
  fontSize: "100%",
  lineHeight: "inherit"
}

export const shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 2px var(--outline-color)",
  none: "none"
}

export const colors = {
  text: "#000000",
  surface: "#ffffff",
  brand: "#0A6EB4",
  interactive: "#0b77c2",
  interactiveHover: "#085387",
  interactiveText: "#ffffff",
  accent: "#f7b825",
  success: "#22543d",
  muted: "#82817d",
  badge: {
    brand: "#d7efff",
    success: "#c6f6d5",
  }
}

export const radii = {
  "none": "0",
  "sm": "0.125rem",
  "default": "0.25rem",
  "md": "0.375rem",
  "lg": "0.8rem",
  "full": "9999px",
}

export const space = [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem"]

// TODO: Check support doesn't
export const transitions = {
  shadow: "box-shadow 500ms",
  property: {
    none: "none",
    all: "all",
    default: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  timingFunction: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  duration: {
    "75": "75ms",
    "100": "100ms",
    "150": "150ms",
    "200": "200ms",
    "300": "300ms",
    "500": "500ms",
    "700": "700ms",
    "1000": "1000ms",
  },
}


// === Fonts

export const baseFonts = {
  sans:
    "\"Muli\",system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
  serif: "Georgia,Cambria,\"Times New Roman\",Times,serif",
  mono: "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
}

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: "inherit"
}

export const fontSizes = [
  "0.75rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2.25rem",
  "3.5rem",
  "4.5rem",
  "5.5rem",
  "6rem"
]

export const fontWeights = {
  light: "300",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900",
}

export const lineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
}

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}

export type TypographyVariants = "h1" | "body";
export const typography = {
  h1: {
    fontFamily: "body",
    fontWeight: "bold",
    lineHeight: "normal",
    m: 0,
    mb: 1,
    fontSize: 6,
    mt: 4
  },
  body: {
    fontFamily: "body",
    fontSize: 2
  }
}

export type ButtonVariants = "simple";
export const buttons = {
  simple: {
    ...coreButtonStyles,
    backgroundColor: "interactive",
    border: "none",
    color: "interactiveText",
    fontWeight: "bold",
    borderRadius: "lg",
    "&:hover": {
      backgroundColor: "interactiveHover"
    }
  }
}

const baseCard = {
  p: 3,
  borderRadius: "md",
  bg: "surface",
}

export type CardVariants = "outline" | "default";
export const cards = {
  outline: {
    ...baseCard,
    "--outline-color": "rgb(226, 232, 240)",
    boxShadow: "outline"
  },
  default: {
    ...baseCard,
  }
}

export type Variants = "badge" | "link";
export const variants = {
  badge: {
    fontFamily: "body",
    textTransform: "uppercase",
    px: 2,
    py: 1,
    fontWeight: "bold",
    borderRadius: "sm",
    whiteSpace: "nowrap",
    display: "inline-block"
  },
  link: {
    color: "brand"
  }
}

export type VariantTypes = "variants" | "cards" | "typography" | "buttons";

// https://theme-ui.com/theme-spec/
const theme = {
  shadows,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  fonts,
  colors,
  radii,
  space,
  transitions,

  // Variants
  typography,
  buttons,
  cards,
  variants
}

export default theme

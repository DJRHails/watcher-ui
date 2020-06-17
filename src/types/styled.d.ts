import "styled-components";
import { CoreTheme } from "../themes/theme";

declare module "styled-components" {
  export interface DefaultTheme extends CoreTheme {}
}
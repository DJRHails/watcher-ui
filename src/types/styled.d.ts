import 'styled-components'
import { Theme } from 'styled-system'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
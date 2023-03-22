import { AppTheme } from 'src/theme'

type CustomTheme = typeof AppTheme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

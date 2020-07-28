import { styleFn } from 'styled-system';

declare module '@styled-system/css' {
  export function css(input?: SystemStyleObject): styleFn;
}
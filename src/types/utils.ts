/* eslint-disable @typescript-eslint/no-explicit-any */

export type As = React.ElementType<any>

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type AnyFunction<T = any> = (...args: T[]) => any

export type FunctionArguments<T extends AnyFunction> = T extends (
  ...args: infer R
) => any
  ? R
  : never

export type Dict<T = any> = Record<string, T>

export type ReactNodeOrRenderProp<P> =
  | React.ReactNode
  | ((props: P) => React.ReactNode)

export type Booleanish = boolean | 'true' | 'false'
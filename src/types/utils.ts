/* eslint-disable @typescript-eslint/no-explicit-any */

export type As = React.ElementType<any>

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
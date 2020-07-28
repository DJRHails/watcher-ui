import { AnyFunction } from '/types/utils';
import { isFunction } from './assertions';

export function runIfFn<T, U>(
  valueOrFn: T | ((...args: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export function once(fn?: AnyFunction | null) {
  let result: any;

  return function (this: any, ...args: any[]) {
    if (fn) {
      result = fn.apply(this, args);
      fn = null;
    }

    return result;
  };
}
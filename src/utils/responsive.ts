/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */

import { isArray, isObject } from "./assertions";

export const objectKeys = <T extends Record<string, unknown>>(obj: T) =>
  (Object.keys(obj) as unknown) as (keyof T)[];

export function mapResponsive(prop: any, mapper: (val: any) => any) {
  if (isArray(prop)) {
    return prop.map(mapper);
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce((result: Record<string, unknown>, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}
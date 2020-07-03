/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */

export const isNull = (value: any): value is null => value === null

export const isUndefined = (value: any): value is undefined => value === undefined

export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value)
}

export const isEmptyArray = (value: any) => isArray(value) && value.length === 0


export const isEmpty = (value: any) => {
  if (isArray(value)) return isEmptyArray(value)
  if (isObject(value)) return isEmptyObject(value)
  if (value == null || value === '') return true
  return false
}

export const isObject = (value: any): value is Record<string, any> => {
  const type = typeof value
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  )
}

export const isEmptyObject = (value: any) =>
  isObject(value) && Object.keys(value).length === 0

export function isNotEmptyObject(value: any): value is Record<string, unknown> {
  return value && !isEmptyObject(value)
}

export function isNumber(value: any): value is number {
  return typeof value === 'number'
}
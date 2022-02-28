import isEqual from 'lodash/isEqual';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFunction(obj: any) {
  return typeof obj == 'function';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject(obj: any) {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

export function classChecker<V, T>(variant: V, target: T): boolean {
  if (Array.isArray(variant) && variant.length) return variant.includes(target);
  return isEqual(variant, target);
}

export function isEmpty(value: unknown): boolean {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
}

const opt = Object.prototype.toString;

export const isArray = (obj) => {
  return opt.call(obj) === '[object Array]';
}

export const isObject = (obj) => {
  return opt.call(obj) === '[object Object]';
}

export const isString = (obj) => {
  return opt.call(obj) === '[object String]';
}

export const isNumber = (obj) => {
  return opt.call(obj) === '[object Number]' && obj === obj; // eslint-disable-line
}

export const isRegExp = (obj) => {
  return opt.call(obj) === '[object RegExp]';
}

export const isFile = (obj) => {
  return opt.call(obj) === '[object File]';
}

export const isBlob = (obj) => {
  return opt.call(obj) === '[object Blob]';
}

export const isUndefined = (obj) => {
  return obj === undefined;
}

export const isNull  = (obj) => {
  return obj === null;
}

export const isFunction = (obj) => {
  return typeof obj === 'function';
}

export const isEmptyObject = (obj) => {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export const isExist = (obj) => {
  return (obj || obj === 0) ? true : false;
}

const IsUtils = {
  isArray,
  isObject,
  isString,
  isNumber,
  isRegExp,
  isFile,
  isBlob,
  isUndefined,
  isNull,
  isFunction,
  isEmptyObject,
  isExist
}

export default IsUtils;
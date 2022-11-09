import { IsUtils } from "../dist/motl.es";

test("IsUtils.isArray ", () => {
  expect(IsUtils.isArray([])).toBe(true);
  expect(IsUtils.isArray({})).toBe(false);
  expect(IsUtils.isArray(null)).toBe(false);
  expect(IsUtils.isArray(undefined)).toBe(false);
  expect(IsUtils.isArray('')).toBe(false);
  expect(IsUtils.isArray(123)).toBe(false);
  expect(IsUtils.isArray(true)).toBe(false);
  expect(IsUtils.isArray(Symbol())).toBe(false);
  expect(IsUtils.isArray(() => {})).toBe(false);
  expect(IsUtils.isArray(1n)).toBe(false);
});

test("IsUtils.isObject ", () => {
  expect(IsUtils.isObject({})).toBe(true);
  expect(IsUtils.isObject([])).toBe(false);
  expect(IsUtils.isObject(null)).toBe(false);
  expect(IsUtils.isObject(undefined)).toBe(false);
  expect(IsUtils.isObject('')).toBe(false);
  expect(IsUtils.isObject(123)).toBe(false);
  expect(IsUtils.isObject(true)).toBe(false);
  expect(IsUtils.isObject(Symbol())).toBe(false);
  expect(IsUtils.isObject(() => {})).toBe(false);
  expect(IsUtils.isObject(1n)).toBe(false);
});

test("IsUtils.isString ", () => {
  expect(IsUtils.isString({})).toBe(false);
  expect(IsUtils.isString([])).toBe(false);
  expect(IsUtils.isString(null)).toBe(false);
  expect(IsUtils.isString(undefined)).toBe(false);
  expect(IsUtils.isString('')).toBe(true);
  expect(IsUtils.isString(123)).toBe(false);
  expect(IsUtils.isString(true)).toBe(false);
  expect(IsUtils.isString(Symbol())).toBe(false);
  expect(IsUtils.isString(() => {})).toBe(false);
  expect(IsUtils.isString(1n)).toBe(false);
});

test("IsUtils.isNumber ", () => {
  expect(IsUtils.isNumber({})).toBe(false);
  expect(IsUtils.isNumber([])).toBe(false);
  expect(IsUtils.isNumber(null)).toBe(false);
  expect(IsUtils.isNumber(undefined)).toBe(false);
  expect(IsUtils.isNumber('')).toBe(false);
  expect(IsUtils.isNumber(123)).toBe(true);
  expect(IsUtils.isNumber(true)).toBe(false);
  expect(IsUtils.isNumber(Symbol())).toBe(false);
  expect(IsUtils.isNumber(() => {})).toBe(false);
  expect(IsUtils.isNumber(1n)).toBe(false);
});

test("IsUtils.isRegExp ", () => {
  expect(IsUtils.isRegExp({})).toBe(false);
  expect(IsUtils.isRegExp([])).toBe(false);
  expect(IsUtils.isRegExp(null)).toBe(false);
  expect(IsUtils.isRegExp(undefined)).toBe(false);
  expect(IsUtils.isRegExp('')).toBe(false);
  expect(IsUtils.isRegExp(123)).toBe(false);
  expect(IsUtils.isRegExp(true)).toBe(false);
  expect(IsUtils.isRegExp(Symbol())).toBe(false);
  expect(IsUtils.isRegExp(() => {})).toBe(false);
  expect(IsUtils.isRegExp(1n)).toBe(false);
  expect(IsUtils.isRegExp(/^123$/)).toBe(true);
});

// test("IsUtils.isFile ", () => {
//   expect(IsUtils.isFile({})).toBe(false);
//   expect(IsUtils.isFile([])).toBe(false);
//   expect(IsUtils.isFile(null)).toBe(false);
//   expect(IsUtils.isFile(undefined)).toBe(false);
//   expect(IsUtils.isFile('')).toBe(false);
//   expect(IsUtils.isFile(123)).toBe(false);
//   expect(IsUtils.isFile(true)).toBe(false);
//   expect(IsUtils.isFile(Symbol())).toBe(false);
//   expect(IsUtils.isFile(() => {})).toBe(false);
//   expect(IsUtils.isFile(1n)).toBe(false);
//   expect(IsUtils.isFile(/^123$/)).toBe(false);

//   const file = new File(['text1', 'text2'], 'test.txt', {type: 'text/plain'});
//   expect(IsUtils.isFile(file)).toBe(true);
// });

// test("IsUtils.isBlob ", () => {
//   expect(IsUtils.isBlob({})).toBe(false);
//   expect(IsUtils.isBlob([])).toBe(false);
//   expect(IsUtils.isBlob(null)).toBe(false);
//   expect(IsUtils.isBlob(undefined)).toBe(false);
//   expect(IsUtils.isBlob('')).toBe(false);
//   expect(IsUtils.isBlob(123)).toBe(false);
//   expect(IsUtils.isBlob(true)).toBe(false);
//   expect(IsUtils.isBlob(Symbol())).toBe(false);
//   expect(IsUtils.isBlob(() => {})).toBe(false);
//   expect(IsUtils.isBlob(1n)).toBe(false);
//   expect(IsUtils.isBlob(/^123$/)).toBe(false);


// const content1 = ['This is my firt trip to an island'];
// const blob1 = new Blob(content1, {type: 'text/plain'});
// const content2 = {name: 'Alice', age: 23};
// const blob2 = new Blob([JSON.stringify(content2, null, 2)], {type: 'application/json'});

// expect(IsUtils.isBlob(blob1)).toBe(true);
// expect(IsUtils.isBlob(blob2)).toBe(true);
// });

test("IsUtils.isUndefined ", () => {
  expect(IsUtils.isUndefined({})).toBe(false);
  expect(IsUtils.isUndefined([])).toBe(false);
  expect(IsUtils.isUndefined(null)).toBe(false);
  expect(IsUtils.isUndefined(undefined)).toBe(true);
  expect(IsUtils.isUndefined('')).toBe(false);
  expect(IsUtils.isUndefined(123)).toBe(false);
  expect(IsUtils.isUndefined(true)).toBe(false);
  expect(IsUtils.isUndefined(Symbol())).toBe(false);
  expect(IsUtils.isUndefined(() => {})).toBe(false);
  expect(IsUtils.isUndefined(1n)).toBe(false);
  expect(IsUtils.isUndefined(/^123$/)).toBe(false);
});

test("IsUtils.isNull ", () => {
  expect(IsUtils.isNull({})).toBe(false);
  expect(IsUtils.isNull([])).toBe(false);
  expect(IsUtils.isNull(null)).toBe(true);
  expect(IsUtils.isNull(undefined)).toBe(false);
  expect(IsUtils.isNull('')).toBe(false);
  expect(IsUtils.isNull(123)).toBe(false);
  expect(IsUtils.isNull(true)).toBe(false);
  expect(IsUtils.isNull(Symbol())).toBe(false);
  expect(IsUtils.isNull(() => {})).toBe(false);
  expect(IsUtils.isNull(1n)).toBe(false);
  expect(IsUtils.isNull(/^123$/)).toBe(false);
});

test("IsUtils.isFunction ", () => {
  expect(IsUtils.isFunction({})).toBe(false);
  expect(IsUtils.isFunction([])).toBe(false);
  expect(IsUtils.isFunction(null)).toBe(false);
  expect(IsUtils.isFunction(undefined)).toBe(false);
  expect(IsUtils.isFunction('')).toBe(false);
  expect(IsUtils.isFunction(123)).toBe(false);
  expect(IsUtils.isFunction(true)).toBe(false);
  expect(IsUtils.isFunction(Symbol())).toBe(false);
  expect(IsUtils.isFunction(() => {})).toBe(true);
  expect(IsUtils.isFunction(1n)).toBe(false);
  expect(IsUtils.isFunction(/^123$/)).toBe(false);
});

test("IsUtils.isEmptyObject ", () => {
  expect(IsUtils.isEmptyObject({})).toBe(true);
  expect(IsUtils.isEmptyObject(null)).toBe(false);
  expect(IsUtils.isEmptyObject({age: 28})).toBe(false);
});

test("IsUtils.isExist ", () => {
  expect(IsUtils.isExist({})).toBe(true);
  expect(IsUtils.isExist([])).toBe(true);
  expect(IsUtils.isExist(0)).toBe(true);

  expect(IsUtils.isExist(false)).toBe(false);
  expect(IsUtils.isExist(null)).toBe(false);
  expect(IsUtils.isExist(undefined)).toBe(false);
  expect(IsUtils.isExist('')).toBe(false);
});







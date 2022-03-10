
import { ObjectUtils } from '../index';

test("ObjectUtils.deepCopy({age: 28, name: '张三'})", () => {
  const info = {age: 28, name: '张三'};
  const copy = ObjectUtils.deepCopy(info);
  const ret = (JSON.stringify(info) === JSON.stringify(copy)) && (info !== copy);
  expect(ret).toBe(true);
});

test("ObjectUtils.copyValue(tar, src)", () => {

  const src = {
    age: 28,
    name: '张三'
  }

  const tar = {
    age: null,
    name: null,
    sex: null
  }

  ObjectUtils.copyValue(tar, src);

  const case1 = tar.age === 28;
  const case2 = tar.name === '张三';
  const case3 = tar.sex === null;
  const ret = case1 && case2 && case3; 

  expect(ret).toBe(true);
});

test("isObject(value)", () => {
  expect(ObjectUtils.isObject({})).toBe(true);
  expect(ObjectUtils.isObject(null)).toBe(false);
  expect(ObjectUtils.isObject(undefined)).toBe(false);
  expect(ObjectUtils.isObject(123)).toBe(false);
  expect(ObjectUtils.isObject('123')).toBe(false);
  expect(ObjectUtils.isObject(false)).toBe(false);
  expect(ObjectUtils.isObject(Symbol())).toBe(false);
});

test("ObjectUtils.isEmpty({})", () => {
  expect(ObjectUtils.isEmpty({})).toBe(true);
  expect(ObjectUtils.isEmpty({age: 28})).toBe(false);
})



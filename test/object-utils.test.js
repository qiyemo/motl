
import { ObjectUtils } from '../dist/motl.es';

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
  expect(ObjectUtils.isEmpty(null)).toBe(false);
  expect(ObjectUtils.isEmpty({age: 28})).toBe(false);
})

test("ObjectUtils.emptyStrToNull({})", () => {
  const tar1 = {};
  const ret1 = {};
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar1))).toBe(JSON.stringify(ret1));
  const tar2 = {
    name: '',
    age: 28
  }
  const ret2 = {
    name: null,
    age: 28
  }
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar2))).toBe(JSON.stringify(ret2));

  const tar3 = null;
  const ret3 = null;
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar3))).toBe(JSON.stringify(ret3));

  const tar4 = undefined;
  const ret4 = undefined;
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar4))).toBe(JSON.stringify(ret4));

  const tar5 = 0;
  const ret5 = 0;
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar5))).toBe(JSON.stringify(ret5));

  const tar6 = false;
  const ret6 = false;
  expect(JSON.stringify(ObjectUtils.emptyStrToNull(tar6))).toBe(JSON.stringify(ret6));


})



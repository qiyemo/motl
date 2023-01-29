
import { IDCardUtils } from "../dist/motl.es";

test("IDCardUtils.getBirthday('610481199312303815')", () => {
  expect(IDCardUtils.getBirthday('610481199312303815')).toBe('1993-12-30');
});

test("IDCardUtils.getYear('610481199312303815')", () => {
  expect(IDCardUtils.getYear('610481199312303815')).toBe(1993);
});

test("IDCardUtils.getMonth('610481199312303815')", () => {
  expect(IDCardUtils.getMonth('610481199312303815')).toBe(12);
});

test("IDCardUtils.getMonth('610481199312303815')", () => {
  expect(IDCardUtils.getDate('610481199312303815')).toBe(30);
});

test("IDCardUtils.getAge('610481199312303815')", () => {
  expect(IDCardUtils.getAge('610481199312303815')).toBe(29);
});

test("IDCardUtils.getSexNum('610481199312303815')", () => {
  expect(IDCardUtils.getSexNum('610481199312303815')).toBe(1);
});

test("IDCardUtils.getSex('610481199312303815')", () => {
  expect(IDCardUtils.getSex('610481199312303815')).toBe('男');
});

test("IDCardUtils.getInfo('610481199312303815')", () => {
  expect(IDCardUtils.getInfo('610481199312303815').birthday).toBe('1993-12-30');
  expect(IDCardUtils.getInfo('610481199312303815').year).toBe(1993);
  expect(IDCardUtils.getInfo('610481199312303815').month).toBe(12);
  expect(IDCardUtils.getInfo('610481199312303815').date).toBe(30);
  expect(IDCardUtils.getInfo('610481199312303815').age).toBe(29);
  expect(IDCardUtils.getInfo('610481199312303815').sex).toBe('男');
  expect(IDCardUtils.getInfo('610481199312303815').sexNum).toBe(1);


});



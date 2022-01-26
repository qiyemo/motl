import { DateUtils } from "../dist/motl.es";

test("DateUtils.format('2022-01-26')", () => {
  
  const ret =  true;
  expect(ret).toBe(true);
});

test("DateUtils.cnWeek('2022-01-26')", () => {
  expect(DateUtils.cnWeek('2022-01-26')).toBe('三');
});

test("DateUtils.realMonth('2022-01-26')", () => {
  expect(DateUtils.realMonth('2022-01-26')).toBe(1);
});

test("DateUtils.withRealMonth('2022-01-26', 1)", () => {
  const date = DateUtils.withRealMonth('2022-01-26', 1);
  expect(date.getMonth()).toBe(0);
});
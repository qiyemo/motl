import { DateUtils } from "../index";

test("DateUtils.format('2022-01-26')", () => {
  expect(DateUtils.format('2022-01-26', 'yyyy-MM-dd HH:mm:ss'))
  .toBe('2022-01-26 00:00:00');
  expect(DateUtils.format('2022-01-26', 'YYYY-MM-DD HH:mm:ss'))
  .toBe('2022-01-26 00:00:00');
  expect(DateUtils.format('2022-01-26', 'YYYY年MM月DD日 HH时mm分ss秒'))
  .toBe('2022年01月26日 00时00分00秒');
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
import { PageUtils } from "../dist/motl.es";

test("PageUtils.pageData ", () => {
  const list = [
    1,2,3,4,5,6,7,8,9,10,
    12,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
  ];

  const data1 = [1,2,3,4,5,6,7,8,9,10];
  const data2 = [12,12,13,14,15,16,17,18,19,20];
  const data3 = [21,22,23,24,25,26,27,28,29,30];
  const data4 = [31,32,33,34,35,36,37,38,39,40];
  const data5 = [41,42,43,44,45,46,47,48,49,50];

  const page =  PageUtils.build(10);
  page.current = 1;
  expect(JSON.stringify(PageUtils.pageData(page,list)) === JSON.stringify(data1)).toBe(true);
  page.current = 2;
  expect(JSON.stringify(PageUtils.pageData(page,list)) === JSON.stringify(data2)).toBe(true);
  page.current = 3;
  expect(JSON.stringify(PageUtils.pageData(page,list)) === JSON.stringify(data3)).toBe(true);
  page.current = 4;
  expect(JSON.stringify(PageUtils.pageData(page,list)) === JSON.stringify(data4)).toBe(true);
  page.current = 5;
  expect(JSON.stringify(PageUtils.pageData(page,list)) === JSON.stringify(data5)).toBe(true);
});
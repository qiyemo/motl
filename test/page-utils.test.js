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

  const list1 = [
    {value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10},
    {value: 11},{value: 12},{value: 13},{value: 14},{value: 15},{value: 16},{value: 17},{value: 18},{value: 19},{value: 20},
    {value: 21},{value: 22},{value: 23},{value: 24},{value: 25},{value: 26},{value: 27},{value: 28},{value: 29},{value: 30},
  ];
  const data2_1 = [{value: 1, index: 1},{value: 2,index: 2},{value: 3, index: 3},{value: 4, index: 4},{value: 5, index: 5},
    {value: 6,index: 6},{value: 7, index: 7},{value: 8, index: 8},{value: 9, index: 9},{value: 10, index: 10}];
  const data2_2 = [{value: 11, index: 11},{value: 12,index: 12},{value: 13, index: 13},{value: 14, index: 14},{value: 15, index: 15},
    {value: 16,index: 16},{value: 17, index: 17},{value: 18, index: 18},{value: 19, index: 19},{value: 20, index: 20}];
  const data2_3 = [{value: 21, index: 21},{value: 22,index: 22},{value: 23, index: 23},{value: 24, index: 24},{value: 25, index: 25},
    {value: 26,index: 26},{value: 27, index: 27},{value: 28, index: 28},{value: 29, index: 29},{value: 30, index: 30}];

  const page1 = PageUtils.build(10);
  page1.current = 1;
  expect(JSON.stringify(PageUtils.pageData(page1,list1, {withIndex: true, indexField: 'index'})) === JSON.stringify(data2_1)).toBe(true);
  page1.current = 2;
  expect(JSON.stringify(PageUtils.pageData(page1,list1, {withIndex: true, indexField: 'index'})) === JSON.stringify(data2_2)).toBe(true);
  page1.current = 3;
  expect(JSON.stringify(PageUtils.pageData(page1,list1, {withIndex: true, indexField: 'index'})) === JSON.stringify(data2_3)).toBe(true);
});
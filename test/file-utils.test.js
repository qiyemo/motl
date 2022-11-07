import { FileUtils } from "../dist/motl.es";

test("FileUtils.isImg('123.png')", () => {
  expect(FileUtils.isImg('123.png')).toBe(true);
  expect(FileUtils.isImg('123.PNG')).toBe(true);
  expect(FileUtils.isImg('123.JPG')).toBe(true);
  expect(FileUtils.isImg('123.jpg')).toBe(true);
  expect(FileUtils.isImg('123.jpeg')).toBe(true);
  expect(FileUtils.isImg('123.gif')).toBe(true);
  
  expect(FileUtils.isImg('123.pdf')).toBe(false);
  expect(FileUtils.isImg('123')).toBe(false);
});

test("FileUtils.isPdf('123.pdf')", () => {
  expect(FileUtils.isPdf('123.pdf')).toBe(true);
  expect(FileUtils.isPdf('123.PDF')).toBe(true);

  expect(FileUtils.isPdf('123.png')).toBe(false);
});

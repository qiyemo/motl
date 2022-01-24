
interface IDCardInfo{
  // 生日 string
  birthday;
  // 年份 number
  year;
  // 月份 number
  month;
  // 月中的日 number
  date;
  // 年龄 number
  age;
  // 性别
  sex;
  // 性别号:  1：男，0：女
  sexNum;
}

declare module 'motl' {

  export namespace IDCardUtils {
    function getBirthday(no: string): string;
    function getYear(no: string): number;
    function getMonth(no: string): number;
    function getDate(no: string): number;
    function getAge(no: string): number;
    function getSexNum(no: string): 0 | 1;
    function getSex(no: string): string;
    function getInfo(no: string): IDCardInfo;
  }
}
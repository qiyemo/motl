
interface IDCardInfo{
  birthday;
  year;
  month;
  date;
  age;
  sex;
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

  export namespace ObjectUtils {
    function deepCopy(o: any): any;
    function copyValue(tar: any, src: any): void;
    function isObject(value: any): boolean;
    function isEmpty(obj: any): boolean;
  }

  export namespace DateUtils {
    function format(date: Date | string, opt: string): string;
    function cnWeek(date: Date | string): string;
    function realMonth(date: Date | string): number;
    function  withRealMonth(date: Date | string, realMonth: number): Date;
  }

  export namespace UUIDUtils {
    function uuid(): string;
    function uuid32(): string;
  }
}
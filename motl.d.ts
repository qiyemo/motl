
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

  export namespace ObjectUtils {

    /**
     * 深拷贝
     * 
     * @param {*} o 
     * @returns 新对象
     */
    function deepCopy(o: any): any;

    /**
     * 把 src 属性的值赋给 tar 的同名属性
     * 
     * @param tar 目标对象
     * @param src 源对象
     */
    function copyValue(tar: any, src: any): void;


    /**
     * 判断参数是否为一个对象
     * 
     * @param value 
     * @returns 布尔值
     */
    function isObject(value: any): boolean;

    /**
     * 判断对象是否为空对象，若传入非对象参数，抛异常
     * 
     * @param obj 
     * @returns 布尔值
     */
    function isEmpty(obj: any): boolean;
  }

  export namespace DateUtils {

    // java、element  yyyy-MM-dd HH:mm:ss
    // dayjs、moment YYYY-MM-DD HH:mm:ss
    function format(date: Date | string, opt: string): string;

    function cnWeek(date: Date | string): string;

    function realMonth(date: Date | string): number;

    function  withRealMonth(date: Date | string, realMonth: number): Date;
  }
}
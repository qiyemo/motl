
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
    /** 将空字符串属性值设置为 null */
    function emptyStrToNull(obj: any): any;


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

  export namespace FileUtils {
    function isImg(name: string): boolean;
    function isPdf(name: string): boolean;
  }

  export namespace TreeUtils {
    function toTree(list: any[], topLevelParentId: any): any[];
    function toList(tree: any[]): any[];

    /**
     * 根据唯一标识获取树上的节点
     * @param {*} id 唯一标识
     * @param {*} tree 树形数据
     * @param {*} options 选项 {idFieldName: 唯一标识字段名，默认为 'id', childrenFieldName: children字段名，默认为 'children'} 
     * @returns 查询到的节点或 null
     */
    function findNode(id: string, tree: any[], options: {idFieldName: string; childrenFieldName: string;}): any;
  }

  export namespace IsUtils {
    function isArray(obj: any): boolean;
    function isObject(obj: any): boolean;
    function isString(obj: any): boolean;
    function isNumber(obj: any): boolean;
    function isRegExp(obj: any): boolean;
    function isFile(obj: any): boolean;
    function isBlob(obj: any): boolean;
    function isUndefined(obj: any): boolean;
    function isNull(obj: any): boolean;
    function isFunction(obj: any): boolean;
    function isEmptyObject(obj: any): boolean;
    function isExist(obj: any): boolean;
  }
}
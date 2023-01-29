
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
    function format(date: Date | string, opt?: string): string;
    function cnWeek(date: Date | string): string;
    function realMonth(date: Date | string): number;
    function  withRealMonth(date: Date | string, realMonth?: number): Date;
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
    function toTree(list: any[], topLevelParentId: any, options?: {idField?: string; parentIdField?: string;childrenField?:string}): any[];
    function toList(tree: any[]): any[];

    /**
     * 根据唯一标识获取树上的节点
     * @param {*} id 唯一标识
     * @param {*} tree 树形数据
     * @param {*} options 选项 {idFieldName: 唯一标识字段名，默认为 'id', childrenFieldName: children字段名，默认为 'children'} 
     * @returns 查询到的节点或 null
     */
    function findNode(id: string, tree: any[], options?: {idFieldName?: string; childrenFieldName?:string;}): any;

    function ancestor(id: string, tree: any[], options?: {idField?: string; parentIdField?: string;childrenField?:string}): any[];

    function descendant(node: any, options?: {childrenField?: string})
    
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

  export namespace PageUtils {
     class Page {
      // 分页条数可选项
      sizes: number[];
      // 总条数
      total: number;
      // 每页条数
      size: number;
      // 当前页数
      current: number;

      // 获取当前页数
      get page(): number;
      //  设置当前页数
      set page(page: number);

      // 获取每页条数
      get rows(): number;
      // 设置每页条数
      set rows(size: number);

      constructor(size?: number);

      // d当前页数改变
      currentChange(handle: Function);
      // 每页条数改变
      sizeChange(handle: Function);
     }

    function build(size?: number): {current: number; size: number; total: number; sizes: number[]};
    function pageData(page: {current: number; size: number;}, list: any[], options?: {withIndex?: boolean; indexField?: string;} | undefined): any[];
  }
}

export namespace  DomUtils {
  function setWatermark(str: string):void;
  function outWatermark():void;
}
# motool
js 工具库

## 安装
```
npm install --save motl
```

## 使用
### object-utils
```js
import { ObjectUtils } from 'motl';

/**
 * 深拷贝
 * 
 * @param {*} o 
 * @returns 新对象
 */
ObjectUtils.deepCopy(info)

/**
 * 把 src 属性的值赋给 tar 的同名属性
 * 
 * @param {*} tar 目标对象
 * @param {*} src 源对象
 */
ObjectUtils.copyValue(tar, src)

/**
 * 判断参数是否为一个对象
 * @param {*} value 
 * @returns 布尔值
 */
ObjectUtils.isObject({}) // true
ObjectUtils.isObject('') // false

/**
 * 判断对象是否为空对象，若传入非对象参数，抛异常
 * @param {} obj 
 * @returns 布尔值
 */
ObjectUtils.isEmpty({}) // true
ObjectUtils.isEmpty({age: 18}) // false 


/**
 * 将空字符串属性值设置为 null
 * 后端 定义的参数 String 默认是 null，前端定义的对象 string 默认是 ''，
 * 给后端传值的时候，需要把 '' 转换为 null
 * 
 * @param {} obj 对象
 * @returns 若传入的参数是对象，则返回转换后的新对象；若传入的参数不是对象，则返回原参数。
 * 
 */
const tar = {
  name: '',
  age: 28
}
const ret = {
  name: null,
  age: 28
}
JSON.stringify(ObjectUtils.emptyStrToNull(tar)) === JSON.stringify(ret);
```

### date-utils
```js
import {DateUtils} from 'motl';

/**
 * 格式化日期，支持 java、element、dayjs、moment 年，月，日，时，分，秒 匹配格式
 * java、element yyyy-MM-dd HH:mm:ss
 * dayjs、moment YYYY-MM-DD HH:mm:ss
 * 
 * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
 * @param {*} formatStr 日期格式字符串（默认：'YYYY-MM-DD HH:mm:ss'） 'yyyy-MM-dd HH:mm:ss' | 'YYYY-MM-DD HH:mm:ss' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
 * @returns 格式化后的结果
 */
  DateUtils.format('2022-01-26', 'YYYY年MM月DD日 HH时mm分ss秒') // 2022年01月26日 00时00分00秒
  DateUtils.format('2022-01-26 23:59:59', 'year')     // '2022'
  DateUtils.format('2022-01-26 23:59:59', 'month')  // '2022-01'
  DateUtils.format('2022-01-26 23:59:59', 'day')    // '2022-01-26'
  DateUtils.format('2022-01-26 23:59:59', 'hour')   // '2022-01-26 23'
  DateUtils.format('2022-01-26 23:59:59', 'minute') // '2022-01-26 23:59'
  DateUtils.format('2022-01-26 23:59:59', 'second') //'2022-01-26 23:59:59'

/**
 * 获取中文的星期
 * 
 * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
 * @returns 类型的星期 string
 */
DateUtils.cnWeek('2022-01-26') // 三

/**
 * 获取现实中真是的月份数（1-12）
 * 
 * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
 * @returns 月份数 number
 */
DateUtils.realMonth('2022-01-26') // 1

/**
 * 用现实中的月份数（1-12）设置 Date 月份
 * 
 * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
 * @param {*} realMonth 现实中的月份数（1-12）
 * @returns 指定月份的新 Date 对象
 */
const date = DateUtils.withRealMonth('2022-01-26', 1) // date.getMonth() === 1
```

### idcard-utils
```js
import { IDCardUtils } from "motl";

/**
 * 获取身份证信息
 * 
 * @param {*} no 身份证号
 * @returns {
 *  birthday: string, // 生日，例如：1993-12-30
 *  year: number,   // 年
 *  month: number,  // 月
 *  date: number,   // 日
 *  age: number,    // 年龄
 *  sex: string,    // 男 | 女
 *  sexNum: number, // 1 男，0 女
 * }
 */
IDCardUtils.getInfo('610481199312303815')

/**
 * 获取生日
 * 
 * @param {*} no 身份证号
 * @returns 生日
 */
IDCardUtils.getBirthday('610481199312303815') // 1993-12-30

/**
 * 获取出生年
 * 
 * @param {*} no 身份证号
 * @returns 出生年
 */
IDCardUtils.getYear('610481199312303815') // 1993

/**
 * 获取出生月
 * 
 * @param {*} no 身份证号
 * @returns 出生月
 */
IDCardUtils.getMonth('610481199312303815') // 12

/**
 * 获取出生日
 * 
 * @param {*} no 身份证号
 * @returns 出生日
 */
IDCardUtils.getDate('610481199312303815') // 30

/**
 * 获取年龄
 * 
 * @param {*} no 身份证号
 * @returns 年龄
 */
IDCardUtils.getAge('610481199312303815') // 28

/**
 * 获取性别号 1 男，0 女
 * 
 * @param {*} no 身份证号
 * @returns 性别号
 */
IDCardUtils.getSexNum('610481199312303815') // 1

/**
 * 获取性别
 * 
 * @param {*} no 身份证号
 * @returns 性别
 */
IDCardUtils.getSex('610481199312303815') // 男

```

## uuid-utils
```js
import { UUIDUtils } from 'motl';

/**
 * 生成一个36位（标准的UUID格式） uuid
 */
UUIDUtils.uuid();

/**
 * 生成一个 32 位 uuid
 */
UUIDUtils.uuid32();
```

## tree-utils
```js
import {TreeUtils} from 'motl';

/**
 * 将数组转换为树形结构
 * @param {*} list 源数组
 * @param {*} topLevelParentId 根父 id
 * @param {*} options {idField: 唯一标识字段名（默认：'id'）, parentIdField: 父id字段名（默认：'parentId'）, childrenField: 子字段名（默认：'children'）}
 * @returns 树形数组
 */
const list = [
  {id: '1', name: '1', parentId: '0'},
  {id: '2', name: '2', parentId: '0'},
  {id: '1-1', name: '1-1', parentId: '1'},
  {id: '1-2', name: '1-2', parentId: '1'},
  {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
];
const tree = TreeUtils.toTree(list, '0');

/**
 * 将树转换为数组
 * @param {*} tree 源树
 * @param {*} options {childrenField: 子字段名（默认：'children'）}
 * @returns 数组
 */
const tree = [
  {id: '1', name: '1', parentId: '0', children: [
    {id: '1-1', name: '1-1', parentId: '1', children: [
      {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
    ]},
    {id: '1-2', name: '1-2', parentId: '1'},
  ]},
  {id: '2', name: '2', parentId: '0'},
];
const list = TreeUtils.toList(tree);

/**
 * 
 * @param {*} id 唯一标识
 * @param {*} tree 树形数据
 * @param {*} options 选项 {idFieldName: 唯一标识字段名，默认为 'id', childrenFieldName: children字段名，默认为 'children'} 
 * @returns 查询到的节点或 null
 */
const tree = [
  {id: '1', name: '1', parentId: '0', children: [
    {id: '1-1', name: '1-1', parentId: '1', children: [
      {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
    ]},
    {id: '1-2', name: '1-2', parentId: '1'},
  ]},
  {id: '2', name: '2', parentId: '0'},
];
const node = TreeUtils.findNode('1-1', tree);

/**
 * 获取祖先节点数组
 * 
 * @param {*} id 节点 id
 * @param {*} tree 树
 * @param {*} options {idField: 唯一标识字段名（默认：'id'）, parentIdField: 父id字段名（默认：'parentId'）, childrenField: 子字段名（默认：'children'）}
 * @returns 节点数组
 */
  const tree = [
    {key: '1', name: '1', pid: '0', children: [
      {key: '1-1', name: '1-1', pid: '1', children: [
        {key: '1-1-1', name: '1-1-1', pid: '1-1'},
      ]},
      {key: '1-2', name: '1-2', pid: '1'},
    ]},
    {key: '2', name: '2', pid: '0'},
  ];

  const ancestor = JSON.stringify(TreeUtils.ancestor('1-1-1', tree, {idField: 'key', parentIdField: 'pid'}));
  console.log('ancestor ', ancestor);
  const ancestorIds = JSON.stringify(JSON.parse(ancestor).map(item => item.key));
  const target = JSON.stringify(['1-1', '1']);

  console.log('ancestorIds ', ancestorIds);
  console.log('target ', target);
  
  expect(ancestorIds === target).toBe(true);

/**
 * 获取树的后代节点数组
 * 
 * @param {*} node 树的节点
 * @param {*} options  {childrenField: children字段名，默认为 'children'} 
 * @returns 
 */
const node = 
  {key: '1', name: '1', pid: '0', children: [
    {key: '1-1', name: '1-1', pid: '1', children: [
      {key: '1-1-1', name: '1-1-1', pid: '1-1'},
    ]},
    {key: '1-2', name: '1-2', pid: '1'},
  ]}
const descendant = JSON.stringify(TreeUtils.descendant(node).map(item => item.key));
const target = JSON.stringify(['1-1', '1-1-1', '1-2']);  
expect(descendant === target).toBe(true);

const node1 = {key: '1', name: '1', pid: '0', children1: [
  {key: '1-1', name: '1-1', pid: '1', children1: [
    {key: '1-1-1', name: '1-1-1', pid: '1-1'},
  ]},
  {key: '1-2', name: '1-2', pid: '1'},
]};
const descendants1 = JSON.stringify(TreeUtils.descendant(node1, {childrenField: 'children1'}).map(item => item.key));
const target1 = JSON.stringify(['1-1', '1-1-1', '1-2']);  
expect(descendants1 === target1).toBe(true);


```
## file-utils
```js
import { FileUtils } from 'motl';

/**
 * 是图片
 * @param name 
 * @returns 
 */
FileUtils.isImg('123.png');

/**
 * 是 PDF
 * @param name 
 * @returns 
 */
FileUtils.isPdf('123.pdf');
```

## is-utils
```js
/*
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
*/

import { IsUtils } from "motl";

IsUtils.isArray([]); // true
```
## page-utils
```js
import { IsUtils } from "motl";

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

/**
 * 创建一个 page 对象
 * @param {*} size 每页行数，默认为 10
 * @returns 新 page 对象
 */
const page =  PageUtils.build(10);

/**
 * 将数组进行分页
 * @param {*} page 对象
 * @param {*} list 源数据
 * @returns 分页后得数组
 */
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

// 添加数据序号
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
```

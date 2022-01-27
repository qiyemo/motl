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
ObjectUtils.deepCopy(info);

/**
 * 把 src 属性的值赋给 tar 的同名属性
 * 
 * @param {*} tar 目标对象
 * @param {*} src 源对象
 */
ObjectUtils.copyValue(tar, src);

/**
 * 判断参数是否为一个对象
 * @param {*} value 
 * @returns 布尔值
 */
ObjectUtils.isObject({}); // true
ObjectUtils.isObject(''); // false

/**
 * 判断对象是否为空对象，若传入非对象参数，抛异常
 * @param {} obj 
 * @returns 布尔值
 */
ObjectUtils.isEmpty({}); // true
ObjectUtils.isEmpty({age: 18}); // false 
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
 * @param {*} formatStr 日期格式字符串
 * @returns 格式化后的结果
 */
DateUtils.format('2022-01-26', 'YYYY年MM月DD日 HH时mm分ss秒'); // 2022年01月26日 00时00分00秒

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
DateUtils.realMonth('2022-01-26'); // 1

/**
 * 用现实中的月份数（1-12）设置 Date 月份
 * 
 * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
 * @param {*} realMonth 现实中的月份数（1-12）
 * @returns 指定月份的新 Date 对象
 */
const date = DateUtils.withRealMonth('2022-01-26', 1); // date.getMonth() === 1
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
IDCardUtils.getInfo('610481199312303815');

/**
 * 获取生日
 * 
 * @param {*} no 身份证号
 * @returns 生日
 */
IDCardUtils.getBirthday('610481199312303815'); // 1993-12-30

/**
 * 获取出生年
 * 
 * @param {*} no 身份证号
 * @returns 出生年
 */
IDCardUtils.getYear('610481199312303815'); // 1993

/**
 * 获取出生月
 * 
 * @param {*} no 身份证号
 * @returns 出生月
 */
IDCardUtils.getMonth('610481199312303815'); // 12

/**
 * 获取出生日
 * 
 * @param {*} no 身份证号
 * @returns 出生日
 */
IDCardUtils.getDate('610481199312303815'); // 30

/**
 * 获取年龄
 * 
 * @param {*} no 身份证号
 * @returns 年龄
 */
IDCardUtils.getAge('610481199312303815'); // 28

/**
 * 获取性别号 1 男，0 女
 * 
 * @param {*} no 身份证号
 * @returns 性别号
 */
IDCardUtils.getSexNum('610481199312303815'); // 1

/**
 * 获取性别
 * 
 * @param {*} no 身份证号
 * @returns 性别
 */
IDCardUtils.getSex('610481199312303815'); // 男

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
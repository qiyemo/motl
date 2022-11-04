 /**
   * 格式化日期，支持 java、element、dayjs、moment 年，月，日，时，分，秒 匹配格式
   * java、element yyyy-MM-dd HH:mm:ss
   * dayjs、moment YYYY-MM-DD HH:mm:ss
   * 
   * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
   * @param {*} formatStr 日期格式字符串
   * @returns 格式化后的结果
   */
  export const format = (date, formatStr) => {
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }
    
    const isoStr = date.toISOString();
    const dateItems = isoStr.split('T');

    const dayItems = dateItems[0].split('-');
    const timeItems = dateItems[1].split('.')[0].split(':');

    const regYear = /yyyy|YYYY/;
    const regMonth = /MM/;
    const regDay = /dd|DD/;
    const regHour = /HH/;
    const regMinute = /mm/;
    const regSecond = /ss/;

    return formatStr
    .replace(regYear, dayItems[0])
    .replace(regMonth, dayItems[1])
    .replace(regDay, dayItems[2])
    .replace(regHour, timeItems[0])
    .replace(regMinute, timeItems[1])
    .replace(regSecond, timeItems[2]);
  }

  /**
   * 获取中文的星期
   * 
   * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
   * @returns 类型的星期 string
   */
  export const cnWeek =(date) =>{
    
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }
    const weekDay = date.getDay();
    const weekMap = new Map([
      [0, '日'], 
      [1, '一'], 
      [2, '二'],
      [3, '三'], 
      [4, '四'], 
      [5, '五'], 
      [6, '六']
    ]);
    return weekMap.get(weekDay);
    
  }

  /**
   * 获取现实中真是的月份数（1-12）
   * 
   * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
   * @returns 月份数 number
   */
  export const realMonth = (date) => {
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }
    return date.getMonth() + 1;
  }

  /**
   * 用现实中的月份数（1-12）设置 Date 月份
   * 
   * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
   * @param {*} realMonth 现实中的月份数（1-12）
   * @returns 指定月份的新 Date 对象
   */
  export const withRealMonth = (date, realMonth) => {
    if(realMonth < 1 || realMonth > 31){
      throw new Error('日期越界');
    }
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }

    let newDate = new Date(date.toISOString());
    newDate.setMonth(realMonth - 1);
    return newDate;
  }

const DateUtils = {
  format,
  cnWeek,
  realMonth,
  withRealMonth
}

export default DateUtils;
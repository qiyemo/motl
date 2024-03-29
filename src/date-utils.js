 
 const DEFAULT_FOMART = 'YYYY-MM-DD HH:mm:ss';

 const limits = ['year','month','day', 'hour', 'minute','second'];

 
 /**
   * 格式化日期，支持 java、element、dayjs、moment 年，月，日，时，分，秒 匹配格式
   * java、element yyyy-MM-dd HH:mm:ss
   * dayjs、moment YYYY-MM-DD HH:mm:ss
   * 
   * @param {*} date 能通过 new Date 转换的日期字符串 | Date 对象
   * @param {*} formatStr 日期格式字符串 yyyy-MM-dd HH:mm:ss | YYYY-MM-DD HH:mm:ss | day | hour | minute | second
   * @returns 格式化后的结果
   */
  export const format = (date, formatStr = DEFAULT_FOMART) => {
    let d = new Date(date);
    
    if(typeof date === 'string' && date.length === 'YYYY-MM-DD'.length){
      d.setHours(0,0,0,0);
    }
    if(!(d instanceof Date)){
      throw new Error('参数有误');
    }

    if(!formatStr){
      formatStr = DEFAULT_FOMART;
    }else{
      let limit = limits.find(item => item === formatStr);
      if(limit){
        switch(limit){
          case 'year' :
            formatStr = 'YYYY';
            break;
          case 'month':
            formatStr = 'YYYY-MM';
            break;
          case 'day' :
            formatStr = 'yyyy-MM-dd';
            break;
          case 'hour' :
            formatStr = 'YYYY-MM-DD HH';
            break;
          case 'minute' :
            formatStr = 'YYYY-MM-DD HH:mm';
            break;
          default:
            formatStr = 'YYYY-MM-DD HH:mm:ss';
        }
      }
    }

    // 最准确的方式：
    let year= d.getFullYear();//年
    if (year< 1900) year = year + 1900;
    let month = d.getMonth() + 1;//月
    if (month < 10) month = '0' + month;
    let day = d.getDate();//日
    if (day < 10) day = '0' + day;
    let hour = d.getHours();//小时

    
    if (hour < 10) hour = '0' + hour;
    let minute = d.getMinutes();//分钟
    if (minute < 10) minute = '0' + minute;
    let second = d.getSeconds();//秒
    if (second < 10) second = '0' + second;
    const datetimeStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    
    const dateItems = datetimeStr.split(' ');
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

    let newDate = new Date(date);
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
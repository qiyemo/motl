class DateUtils {

  // java、element  yyyy-MM-dd HH:mm:ss
  // dayjs、moment YYYY-MM-DD HH:mm:ss
  static format(date, opt){
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }

    const opts = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}
    // ObjectUtils.copyValue(opts, opt);
    return Intl.DateTimeFormat("zh-CN", opts).format(date);
    
  }

  static cnWeek(date){
    
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    console.log('cnWeek date:', date);

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

  static realMonth(date){
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }
    return date.getMonth() + 1;
  }

  static withRealMonth(date, realMonth){
    if(realMonth < 1 || realMonth > 31){
      throw new Error('日期越界');
    }
    if((typeof date) === 'string'){
      date = new Date(date);
    }
    if(!(date instanceof Date)){
      throw new Error('参数有误');
    }
    date.setMonth(realMonth - 1);
    return date;
  }
}

export default DateUtils;
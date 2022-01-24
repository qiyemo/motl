

class IDCardInfo {
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

// 检查身份证格式是否合法
const check = (no) => {
  if(!no){
    return false;
  }
  if(no.length !== 18){
    return false;
  }
  return true;
}

// 生日
export const getBirthday = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  // 6-13 年月日 
  const birthday = no.substring(6, 14);
  // 生日
  const year = birthday.substring(0,4);
  const month = birthday.substring(4,6);
  const date = birthday.substring(6);
  return [year,month,date].join('-');
}

// 年
export const getYear = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }
  
  const birthday = getBirthday(no);
  return globalThis.parseInt(birthday.split('-')[0]);
}
// 月
export const getMonth = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  const birthday = getBirthday(no);
  return globalThis.parseInt(birthday.split('-')[1]);
}
// 日
export const getDate = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  const birthday = getBirthday(no);
  return globalThis.parseInt(birthday.split('-')[2]);
}
// 年龄
export const getAge = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }
  const year = getYear(no);
  const month = getMonth(no);
  const date = getDate(no);

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  let age = nowYear - year;
  if(nowMonth < month || (nowMonth === month && nowDate < date)){
    age--;
  }
  return age;
}

// 性别号
export const getSexNum = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  // 16 性别
  const sex = no.charAt(16);
  // 性别
  if(globalThis.parseInt(sex) % 2 === 1){
    return 1;
  }else{
    return 0;
  }
}

// 性别
export const getSex = (no, skipCheck = false) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  const sexNum = getSexNum(no);
  if(sexNum === 1){
    return '男';
  }
  if(sexNum === 0){
    return '女';
  }
}

// 获取身份证信息
export const getInfo = (no) => {
  if(skipCheck === false){
    if(!check(no)){
      throw new Error('参数错误');
    }
  }

  // 0-1 省份（或自治区、直辖市）
  const province = no.substring(0,2);
  // 2-3 公民所在地的市（或州） 
  const city = no.substring(2,4);
  // 4-5 公民所在地的县（或县级市）
  const county = no.substring(4,6);
  // 14-15 派出所编码
  const policeStation = no.substring(14, 16);
  // 17 校验码
  const checkCode = no.charAt(17);

  const info = new IDCardInfo();
  // 生日
  info.birthday = getBirthday(no);
  info.year = getYear(no);
  info.month = getMonth(no);
  info.date = getDate(no);
  // 年龄
  info.age = getAge(no);
  // 性别
  info.sex = getSex(no);
  info.sexNum = getSexNum(no);
  return info;
}

export default { 
  getBirthday,
  getYear,
  getMonth,
  getDate,
  getAge,
  getSexNum,
  getSex,
  getInfo,
}
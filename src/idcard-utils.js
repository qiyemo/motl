

// class IDCardInfo {
//   // 生日 string
//   birthday;
//   // 年份 number
//   year;
//   // 月份 number
//   month;
//   // 月中的日 number
//   date;
//   // 年龄 number
//   age;
//   // 性别
//   sex;
//   // 性别号:  1：男，0：女
//   sexNum;
// }

// class IDCardUtils {

 
// }

 /**
   * 检查身份证格式是否合法
   * @param {*} no string 身份证号
   * @returns boolean 
   */
  const check = (no) => {
    if(!no){
      return false;
    }
    if(no.length !== 18){
      return false;
    }
    return true;
  }

  /**
 * 获取生日
 * 
 * @param {*} no 身份证号
 * @returns 生日 YYYY-MM-DD
 */
  export const  getBirthday = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
    }
  
    // 6-13 年月日 
    const birthday = no.substring(6, 14);
    // 生日
    const year = birthday.substring(0,4);
    const month = birthday.substring(4,6);
    const date = birthday.substring(6);
    return [year,month,date].join('-');
  }

  /**
   * 获取出生年
   * 
   * @param {*} no 身份证号
   * @returns number 出生年
   */
  export const getYear = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
    }
    
    const birthday = IDCardUtils.getBirthday(no);
    return globalThis.parseInt(birthday.split('-')[0]);
  }

  /**
 * 获取出生月
 * 
 * @param {*} no 身份证号
 * @returns number 出生月(1~12)
 */
 export const getMonth = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
    }

    const birthday = IDCardUtils.getBirthday(no);
    return globalThis.parseInt(birthday.split('-')[1]);
 }
 

  /**
 * 获取出生日
 * 
 * @param {*} no 身份证号
 * @returns number 出生日（1~31）
 */
  export const getDate = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
    }
    const birthday = IDCardUtils.getBirthday(no);
    return globalThis.parseInt(birthday.split('-')[2]);
  }

  /**
 * 获取年龄
 * 
 * @param {*} no string 身份证号
 * @returns number 年龄  
 */
  export const getAge = (no) =>{
    if(!check(no)){
      throw new Error('参数错误');
    }
    const year = IDCardUtils.getYear(no);
    const month = IDCardUtils.getMonth(no);
    const date = IDCardUtils.getDate(no);

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

  /**
 * 获取性别号
 * 
 * @param {*} no string 身份证号
 * @returns number 性别号
 */
  export const getSexNum = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
    }
    // 16 性别
    const sex = no.charAt(16);
    // 性别
    if(globalThis.parseInt(sex) % 2 === 1){
      // 男
      return 1;
    }else{
      // 女
      return 0;
    }
  }

  /**
   * 获取性别
   * 
   * @param {*} no string 身份证号
   * @returns '男' | '女' 性别
   */
  export const  getSex = (no) => {
    const num = IDCardUtils.getSexNum(no);
    if(num === 1){
      return '男';
    }else{
      return '女';
    }
  }

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
  export const getInfo = (no) => {
    if(!check(no)){
      throw new Error('参数错误');
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
  
    const info = {};
    // 生日
    info.birthday = IDCardUtils.getBirthday(no);
    info.year = IDCardUtils.getYear(no);
    info.month = IDCardUtils.getMonth(no);
    info.date = IDCardUtils.getDate(no);
    // 年龄
    info.age = IDCardUtils.getAge(no);
    // 性别
    info.sex = IDCardUtils.getSex(no);
    info.sexNum = IDCardUtils.getSexNum(no);
    return info;
  }

const IDCardUtils = {
  getBirthday,
  getYear,
  getMonth,
  getDate,
  getAge,
  getSexNum,
  getSex,
  getInfo,
}

export default IDCardUtils;
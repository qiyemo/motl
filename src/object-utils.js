class ObjectUtils {

  /**
   * 深拷贝对象
   * 
   * @param {*} o 
   * @returns 副本
   */
  static deepcopy(o){
    return JSON.parse(JSON.stringify(o));
  }

  /**
   * 
   * @param {*} tar 目标对象
   * @param {*} src 原对象
   */
  static copyValue(tar, src){
    
  }
}
class ObjectUtils {

  /**
   * 深拷贝
   * 
   * @param {*} o 
   * @returns 新对象
   */
  static deepCopy(o){
    return JSON.parse(JSON.stringify(o));
  }

  /**
   * 把 src 属性的值赋给 tar 的同名属性
   * @param {*} tar 目标对象
   * @param {*} src 源对象
   */
  static copyValue(tar, src){
    if(!ObjectUtils.isObject(tar) || !ObjectUtils.isObject(src)){
      throw new Error('参数异常');
    }
    Object.keys(tar).forEach(key => {
      if(Reflect.has(src, key)){
        tar[key] = src[key];
      }
    });
  }

  /**
   * 判断参数是否为一个对象
   * @param {*} value 
   * @returns 布尔值
   */
  static isObject(value){
    
    return value !== null && (typeof value === 'object' || typeof value === 'function');
  }

  /**
   * 判断对象是否为空对象，若传入非对象参数，抛异常
   * @param {} obj 
   * @returns 布尔值
   */
  static isEmpty(obj){
    if(!ObjectUtils.isObject(obj)){
      throw new Error('参数异常');
    }
    if(Object.getOwnPropertyNames(obj).length === 0){
      return true;
    }
    return false;
  }
}

export default ObjectUtils;
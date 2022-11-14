
const opt = Object.prototype.toString;

/**
   * 深拷贝
   * 
   * @param {*} o 
   * @returns 新对象
   */
 export const deepCopy = (o) => {
  return JSON.parse(JSON.stringify(o));
}

/**
 * 把 src 属性的值赋给 tar 的同名属性
 * @param {*} tar 目标对象
 * @param {*} src 源对象
 */
export const copyValue = (tar, src) => {
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
export const isObject = (value) => {
  return opt.call(value) === '[object Object]';
}

/**
 * 判断对象是否为空对象，若传入非对象参数，抛异常
 * @param {} obj 
 * @returns 布尔值
 */
export const isEmpty = (obj) => {
  return isObject(obj) && Object.keys(obj).length === 0;
}

const ObjectUtils = {
  deepCopy,
  copyValue,
  isObject,
  isEmpty
}

export default ObjectUtils;
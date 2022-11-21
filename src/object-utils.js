
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

/**
 * 将空字符串属性值设置为 null
 * 后端 定义的参数 String 默认是 null，前端定义的对象 string 默认是 ''，
 * 给后端传值的时候，需要把 '' 转换为 null
 * 
 * @param {} obj 对象
 * @returns 若传入的参数是对象，则返回转换后的新对象；若传入的参数不是对象，则返回原参数。
 * 
 */
export const emptyStrToNull = (obj) => {

  if(!isObject(obj)){
    return obj;
  }

  const param = JSON.parse(JSON.stringify(obj));
  if(typeof param === 'object'){
    for(let key of Object.keys(param)){
      if(typeof param[key] === 'string' && param[key] === ''){
        param[key] = null;
      }
    }
    
  }
  return param;
}

const ObjectUtils = {
  deepCopy,
  copyValue,
  isObject,
  isEmpty,
  emptyStrToNull
}

export default ObjectUtils;
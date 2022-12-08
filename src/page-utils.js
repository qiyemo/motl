
class Page {
  sizes = [];
  total = 0;
  size = 10;
  current = 1;
  constructor(size = 10){
    this.size = size;
  }

  get page() {
    return this.current;
  }
  set page(page){
    this.current = page;
  }

  get rows(){
    return this.size;
  }
  set rows(size){
    this.size = size;
  }

  currentChange = (handle) => {
    handle();
  }
  sizeChange = (handle) =>{
    this.current = 1;
    handle();
  }
}

/**
 * 创建一个 page 对象
 * @param {*} size 每页行数，默认为 10
 * @returns 新 page 对象
 */
export const build = (size = 10) => {
  return new Page(size);
}

/**
 * 将数组进行分页
 * @param {*} page 对象
 * @param {*} list 源数据
 * @returns 分页后得数组
 */
export const pageData = (page, list) => {
  const {current, size} = page;

  if(!current || !size){
    return [];
  }

  const start = (current -1) * size;
  const end = start + size;
  const ret = list.slice(start, end);
  return ret;
}

const PageUtils = {
  build,
  pageData
}

export default PageUtils;
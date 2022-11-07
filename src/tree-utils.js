


// 设置 children
const setChildren = (target, list, idField = 'id',parentIdField = 'parentId', childrenField = 'children' ) => {

  const children = list.filter(item =>{
    return item[parentIdField] === target[idField];
  });
  if(children.length){
    target[childrenField] = children;
  }
  if(children.length === 0){
    return;
  }
  for(let child of children){
    setChildren(child,list,idField,parentIdField,childrenField);
  }
}

/**
 * 将数组转换为树形结构
 * @param {*} list 源数组
 * @param {*} topLevelParentId 根父 id
 * @param {*} options {idField: 唯一标识字段名（默认：'id'）, parentIdField: 父id字段名（默认：'parentId'）, childrenField: 子字段名（默认：'children'）}
 * @returns 树形数组
 */
 export const toTree = (list, topLevelParentId = null , options = {
  idField: 'id',
  parentIdField: 'parentId',
  childrenField: 'children'
 }) => {
  const {idField, parentIdField, childrenField} = options;

  // 一级目录
  let tree = list.filter(item => item[parentIdField] === topLevelParentId);
  for(let item of tree){
    setChildren(item, list, idField || 'id',parentIdField || 'parentId',childrenField || 'children');
  }
  return tree;
}

/**
 * 将树转换为数组
 * @param {*} tree 源树
 * @param {*} options {childrenField: 子字段名（默认：'children'）}
 * @returns 数组
 */
export const toList = (tree, options = {childrenField: 'children'} ,retArr = []) => {

  tree.forEach((node) => {
    retArr.push(node);
    const children = node[options.childrenField];
    if(!children || !children.length){
      return;
    }
    toList(children, options, retArr);
  });
  return retArr;
}

const TreeUtils = {
  toTree,
  toList
}

export default TreeUtils;




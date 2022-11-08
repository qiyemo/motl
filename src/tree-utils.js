


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


/**
 * 根据唯一标识获取树上的节点
 * @param {*} id 唯一标识
 * @param {*} tree 树形数据
 * @param {*} options 选项 {idFieldName: 唯一标识字段名，默认为 'id', childrenFieldName: children字段名，默认为 'children'} 
 * @returns 查询到的节点或 null
 */
export const findNode = (id, tree, options = {idFieldName: 'id', childrenFieldName: 'children'}) => {
  if(!id){
    throw new Error('id 参数错误');
  }
  if(!tree || !tree.length){
    throw new Error('tree 参数错误');
  }

  const { idFieldName = 'id', childrenFieldName = 'children'} = options;

  let target = null;
  for (let node of tree) {
   
    if (node[idFieldName] === id) {
      target = node;
    }
  }
  if (target) {
    return target;
  }
  for (let node of tree) {
    if (node.children?.length) {
      target = findNode(id, node[childrenFieldName]);
      if (target) {
        return target;
      }
    }
  }
  return target;
}

const TreeUtils = {
  toTree,
  toList,
  findNode
}

export default TreeUtils;






const DEFAULT_ID_FIELD = 'id';
const DEFAULT_PARENT_FIELD = 'parentId';
const DEFAULT_CHILDREN_FIELD = 'children';

// 设置 children
const setChildren = (target, list, idField = DEFAULT_ID_FIELD ,parentIdField = DEFAULT_PARENT_FIELD, childrenField = DEFAULT_CHILDREN_FIELD) => {

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
 * 
 */
 export const toTree = (list, topLevelParentId = null , options = {}) => {
  const {idField = DEFAULT_ID_FIELD, parentIdField = DEFAULT_PARENT_FIELD, childrenField = DEFAULT_CHILDREN_FIELD} = options;

  // 一级目录
  let tree = list.filter(item => item[parentIdField] === topLevelParentId);
  for(let item of tree){
    setChildren(item, list, idField ,parentIdField ,childrenField);
  }
  return tree;
}

/**
 * 将树转换为数组
 * @param {*} tree 源树
 * @param {*} options {childrenField: 子字段名（默认：'children'）}
 * @returns 数组
 */
export const toList = (tree, options = {} ,retArr = []) => {

  const {childrenField = DEFAULT_CHILDREN_FIELD} = options;

  tree.forEach((node) => {
    retArr.push(node);
    const children = node[childrenField];
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
export const findNode = (id, tree, options = {}) => {
  if(!id){
    throw new Error('id 参数错误');
  }
  if(!tree || !tree.length){
    throw new Error('tree 参数错误');
  }

  const { idFieldName = DEFAULT_ID_FIELD, childrenFieldName = DEFAULT_CHILDREN_FIELD} = options;

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
    if (node.children  && node.children.length) {
      target = findNode(id, node[childrenFieldName], options);
      if (target) {
        return target;
      }
    }
  }
  return target;
}

const loopAncestor = (node, tree , options = {} ,ret = []) => {
  const {idField = DEFAULT_ID_FIELD, parentIdField = DEFAULT_PARENT_FIELD, childrenField = DEFAULT_CHILDREN_FIELD} = options;
  const parent = findNode(node[parentIdField], tree, {idFieldName: idField, childrenFieldName: childrenField});
  if(parent){
    ret.push(parent);
    loopAncestor(parent, tree, options ,ret);
  }
  return ret;
}

/**
 * 
 * @param {*} id 节点 id
 * @param {*} tree 树
 * @param {*} options {idField: 唯一标识字段名（默认：'id'）, parentIdField: 父id字段名（默认：'parentId'）, childrenField: 子字段名（默认：'children'）}
 * @returns 节点数组
 */
 const ancestor = (id, tree , options = {}) => {
  const {idField = DEFAULT_ID_FIELD, childrenField = DEFAULT_CHILDREN_FIELD} = options;
  const node = findNode(id, tree, {idFieldName: idField, childrenFieldName: childrenField});
  if(!node){
    return [];
  }
  return loopAncestor(node, tree, options);
}

/**
 * 获取树的后代节点数组
 * 
 * @param {*} node 树的节点
 * @param {*} options  {childrenField: children字段名，默认为 'children'} 
 * @returns 
 */
export const descendant = (node, options = {}, ret = []) => {

  const {childrenField = DEFAULT_CHILDREN_FIELD} = options;

  

  if(!node || !node[childrenField]){
    return ret;
  }

  const children = node[childrenField];
  if(children && children.length){
    for(let child of children){
      ret.push(child);
      descendant(child, options ,ret);
    }
  }
  return ret;
}

const TreeUtils = {
  toTree,
  toList,
  findNode,
  ancestor,
  descendant
}

export default TreeUtils;




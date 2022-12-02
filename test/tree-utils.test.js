import { TreeUtils } from "../dist/motl.es";

test("TreeUtils.toTree ", () => {
  const resoure = [
    {id: '1', name: '1', parentId: '0'},
    {id: '2', name: '2', parentId: '0'},
    {id: '1-1', name: '1-1', parentId: '1'},
    {id: '1-2', name: '1-2', parentId: '1'},
    {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
  ];
  const target = [
    {id: '1', name: '1', parentId: '0', children: [
      {id: '1-1', name: '1-1', parentId: '1', children: [
        {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
      ]},
      {id: '1-2', name: '1-2', parentId: '1'},
    ]},
    {id: '2', name: '2', parentId: '0'},
  ];

  const ret = TreeUtils.toTree(resoure, '0');
  expect(JSON.stringify(ret) === JSON.stringify(target)).toBe(true);
});

test("TreeUtils.toList ", () => {

  const target = [
    {id: '1', name: '1', parentId: '0', children: [
      {id: '1-1', name: '1-1', parentId: '1', children: [
        {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
      ]},
      {id: '1-2', name: '1-2', parentId: '1'},
    ]},
    {id: '2', name: '2', parentId: '0'},
  ];

  const list = TreeUtils.toList(target);
  list.forEach(item => delete item.children);
  expect(list.length === 5).toBe(true);
});

test('TreeUtils.findNode ', () => {
  const tree = [
    {id: '1', name: '1', parentId: '0', children: [
      {id: '1-1', name: '1-1', parentId: '1', children: [
        {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
      ]},
      {id: '1-2', name: '1-2', parentId: '1'},
    ]},
    {id: '2', name: '2', parentId: '0'},
  ];

  const node = TreeUtils.findNode('1-1', tree);
  
  const target = {id: '1-1', name: '1-1', parentId: '1', children: [
    {id: '1-1-1', name: '1-1-1', parentId: '1-1'},
  ]};

  expect(JSON.stringify(node) === JSON.stringify(target)).toBe(true);
});

test('TreeUtils.ancestor ', () => {
  const tree = [
    {key: '1', name: '1', pid: '0', children: [
      {key: '1-1', name: '1-1', pid: '1', children: [
        {key: '1-1-1', name: '1-1-1', pid: '1-1'},
      ]},
      {key: '1-2', name: '1-2', pid: '1'},
    ]},
    {key: '2', name: '2', pid: '0'},
  ];

  const ancestor = JSON.stringify(TreeUtils.ancestor({key: '1-1-1', pid: '1-1'}, tree, {idField: 'key', parentIdField: 'pid'}));
  const target = JSON.stringify(['1-1', '1', '0']);

  console.log('ancestor ', ancestor);
  console.log('target ', target);
  
  expect(ancestor === target).toBe(true);
});

test('TreeUtils.descendants ', () => {
  const node = 
    {key: '1', name: '1', pid: '0', children: [
      {key: '1-1', name: '1-1', pid: '1', children: [
        {key: '1-1-1', name: '1-1-1', pid: '1-1'},
      ]},
      {key: '1-2', name: '1-2', pid: '1'},
    ]}
   

  const descendants = JSON.stringify(TreeUtils.descendants(node));
  const target = JSON.stringify(['1-1', '1', '0']);

  console.log('descendants ', descendants);
  console.log('target ', target);
  
  expect(descendants === target).toBe(true);
});

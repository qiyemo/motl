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

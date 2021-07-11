import { TreeNode } from '@src/common/tree-node';
import { invertTree } from './index';

describe('Invert Binary Tree', function () {
  const node7 = new TreeNode(9, null, null);
  const node6 = new TreeNode(6, null, null);
  const node5 = new TreeNode(3, null, null);
  const node4 = new TreeNode(1, null, null);
  const node3 = new TreeNode(7, node6, node7);
  const node2 = new TreeNode(2, node4, node5);
  const node1 = new TreeNode(4, node2, node3);

  it('Should successfully invert the binary tree', function () {
    const invertedRoot = invertTree(node1);

    expect(invertedRoot).toBe(node1);
    expect(invertedRoot?.left).toBe(node3);
    expect(invertedRoot?.right).toBe(node2);
    expect(invertedRoot?.left?.left).toBe(node7);
    expect(invertedRoot?.left?.right).toBe(node6);
    expect(invertedRoot?.right?.right).toBe(node4);
    expect(invertedRoot?.right?.left).toBe(node5);
  });
});

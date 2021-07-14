import { TreeNode } from '@src/common/tree-node';
import { maxDepth } from './index';

describe('Maximum depth of binary tree', function () {
  it('Should calculate max depth of binary tree correctly', function () {
    const node5 = new TreeNode(7);
    const node4 = new TreeNode(15);
    const node3 = new TreeNode(20, node4, node5);
    const node2 = new TreeNode(9);
    const node1 = new TreeNode(3, node2, node3);

    const depth = maxDepth(node1);

    expect(depth).toEqual(3);
  });
});

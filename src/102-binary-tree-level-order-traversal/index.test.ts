import { TreeNode } from '@src/common/tree-node';
import { levelOrder } from './index';

describe('Binary Tree Level Order Traversal', function () {
  it('should return level order traversal', function () {
    const node5 = new TreeNode(15);
    const node4 = new TreeNode(7);
    const node3 = new TreeNode(20, node5, node4);
    const node2 = new TreeNode(9);
    const node1 = new TreeNode(3, node2, node3);

    const result = levelOrder(node1);

    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });
});

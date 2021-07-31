import { TreeNode } from '@src/common/tree-node';
import { rightSideView } from './index';

describe('Binary Tree Right Side View', function () {
  it('Binary Tree Right Side View', function () {
    const node1 = new TreeNode(4);
    const node2 = new TreeNode(5);
    const node3 = new TreeNode(3, null, node1);
    const node4 = new TreeNode(2, null, node2);
    const node5 = new TreeNode(1, node4, node3);

    const res = rightSideView(node5);

    expect(res).toEqual([1, 3, 4]);
  });

  it('Binary Tree Right Side View', function () {
    const node1 = new TreeNode(3);
    const node2 = new TreeNode(1, null, node1);

    const res = rightSideView(node2);

    expect(res).toEqual([1, 3]);
  });
});

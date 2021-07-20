import { TreeNode } from '@src/common/tree-node';
import { kthSmallest } from './index';

describe('Kth smallest element in a bst', function () {
  const node4 = new TreeNode(2);
  const node3 = new TreeNode(4);
  const node2 = new TreeNode(1, null, node4);
  const node1 = new TreeNode(3, node2, node3);

  it('should return the first smallest value', function () {
    const result = kthSmallest(node1, 1);

    expect(result).toEqual(1);
  });

  it('should return the third smallest value', function () {
    const result = kthSmallest(node1, 3);

    expect(result).toEqual(3);
  });
});

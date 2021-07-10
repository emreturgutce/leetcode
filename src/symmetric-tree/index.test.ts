import { TreeNode } from '@common/tree-node';
import { isSymmetric } from './index';

describe('Symmetric Tree', function () {
  it('Should be true', function () {
    const node3 = new TreeNode(2, null, null);
    const node2 = new TreeNode(2, null, null);
    const node1 = new TreeNode(1, node2, node3);

    const result = isSymmetric(node1);

    expect(result).toEqual(true);
  });
});

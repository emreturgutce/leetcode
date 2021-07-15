import { TreeNode } from '@src/common/tree-node';
import { mergeTrees } from './index';

describe('Merge two binary trees', function () {
  it('Should merge two binary trees successfully', function () {
    const node14 = new TreeNode(5);
    const node13 = new TreeNode(2);
    const node12 = new TreeNode(3, node14);
    const node11 = new TreeNode(1, node12, node13);

    const node25 = new TreeNode(7);
    const node24 = new TreeNode(4);
    const node23 = new TreeNode(3, null, node25);
    const node22 = new TreeNode(1, null, node24);
    const node21 = new TreeNode(2, node22, node23);

    const node = mergeTrees(node11, node21);

    expect(node?.val).toEqual(3);
    expect(node?.left?.val).toEqual(4);
    expect(node?.right?.val).toEqual(5);
    expect(node?.left?.left?.val).toEqual(5);
    expect(node?.left?.right?.val).toEqual(4);
    expect(node?.right?.right?.val).toEqual(7);
  });
});

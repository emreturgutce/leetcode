import { TreeNode } from '@src/common/tree-node';

export function maxDepth(root: Nullable<TreeNode>): number {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

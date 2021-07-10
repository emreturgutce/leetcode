import { TreeNode } from '@src/common/tree-node';

export function invertTree(root: Nullable<TreeNode>): Nullable<TreeNode> {
  if (root === null) {
    return null;
  }

  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.left = right;
  root.right = left;

  return root;
}

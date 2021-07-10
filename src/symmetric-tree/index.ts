import { TreeNode } from '@common/tree-node';

export function isSymmetric(root: Nullable<TreeNode>): boolean {
  return isMirror(root, root);
}

function isMirror(t1: Nullable<TreeNode>, t2: Nullable<TreeNode>): boolean {
  if (t1 === null && t2 === null) {
    return true;
  }

  if (t1 === null || t2 === null) {
    return false;
  }

  return (
    t1.val == t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  );
}

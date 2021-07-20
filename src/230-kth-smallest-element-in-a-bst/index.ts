import { TreeNode } from '@src/common/tree-node';

export function kthSmallest(root: Nullable<TreeNode>, k: number): number {
  const inorder: number[] = [];
  inorderTraversal(root, inorder);
  return inorder[k - 1];
}

function inorderTraversal(root: Nullable<TreeNode>, result: number[]): void {
  if (root === null) return;
  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);
}

import { TreeNode } from '@common/tree-node';

/**
 * Time Complexity: O(n)
 * Space Complexity: O(logn)
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  const inorderNums: number[] = [];
  helper(root, inorderNums);
  return inorderNums;
}

function helper(root: TreeNode | null, numbers: number[] = []): void {
  if (root === null) {
    return;
  }

  helper(root.left, numbers);
  numbers.push(root.val);
  helper(root.right, numbers);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function inorderTraversalWithStack(root: TreeNode | null): number[] {
  const inorderNums: number[] = [];
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;

  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop() ?? null;

    if (curr !== null) {
      inorderNums.push(curr.val);
      curr = curr.right;
    }
  }

  return inorderNums;
}

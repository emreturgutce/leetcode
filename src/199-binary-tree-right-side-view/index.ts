import { TreeNode } from '@src/common/tree-node';

export function rightSideView(root: Nullable<TreeNode>): number[] {
  const result: number[] = [];

  if (root === null) {
    return result;
  }

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const curr = queue.shift() as TreeNode;

      if (i === size - 1) {
        result.push(curr.val);
      }

      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }

  return result;
}

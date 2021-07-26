import { TreeNode } from '@src/common/tree-node';

export function levelOrder(root: Nullable<TreeNode>): number[][] {
  const result: number[][] = [];

  if (root === null) {
    return result;
  }

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    let currentLevelLength = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < currentLevelLength; i++) {
      const currentNode = queue.shift() as TreeNode;
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

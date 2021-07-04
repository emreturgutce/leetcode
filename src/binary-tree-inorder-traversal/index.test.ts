import { TreeNode, inorderTraversalWithStack, inorderTraversal } from './index';

describe('Binary Tree Inorder Traversal', function () {
  /**
   * 			1
   * 		  /	  \
   * 	   null	   2
   * 	 		 /   \
   * 			3     null
   */
  const node3 = new TreeNode(3, null, null);
  const node2 = new TreeNode(2, node3, null);
  const node1 = new TreeNode(1, null, node2);

  it('Recursive Inorder Traversal', function () {
    const inorderTraversalNums = inorderTraversal(node1);

    inorderTraversalExpectations(inorderTraversalNums, node1, node2, node3);
  });

  it('Inorder Traversal With Stack', function () {
    const inorderTraversalNums = inorderTraversalWithStack(node1);

    inorderTraversalExpectations(inorderTraversalNums, node1, node2, node3);
  });
});

function inorderTraversalExpectations(nums: number[], ...nodes: TreeNode[]) {
  expect(nums.length).toEqual(3);
  expect(nums[0]).toEqual(nodes[0].val);
  expect(nums[1]).toEqual(nodes[2].val);
  expect(nums[2]).toEqual(nodes[1].val);
}

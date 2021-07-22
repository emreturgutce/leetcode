/**
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */
export function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;
  const leftSide = new Array<number>(numsLength).fill(1);
  const rightSide = new Array<number>(numsLength).fill(1);
  const result = new Array<number>(numsLength);

  // Building the left sides
  for (let i = 1; i < numsLength; i++) {
    leftSide[i] = nums[i - 1] * leftSide[i - 1];
  }

  // Building the right sides
  for (let i = numsLength - 2; i >= 0; i--) {
    rightSide[i] = nums[i + 1] * rightSide[i + 1];
  }

  // Building the result
  for (let i = 0; i < numsLength; i++) {
    result[i] = leftSide[i] * rightSide[i];
  }

  return result;
}

export function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => a - b)[nums.length - k];
}

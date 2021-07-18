export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  backtrack(0, nums, [], result);
  return result;
}

function backtrack(
  idx: number,
  nums: number[],
  curr: number[],
  result: number[][],
): void {
  result.push([...curr]);

  for (let i = idx; i < nums.length; i++) {
    curr.push(nums[i]);
    backtrack(i + 1, nums, curr, result);
    curr.pop();
  }
}

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
  if (idx === nums.length) {
    result.push([...curr]);
    return;
  }

  curr.push(nums[idx]);
  backtrack(idx + 1, nums, curr, result);
  curr.pop();
  backtrack(idx + 1, nums, curr, result);
}

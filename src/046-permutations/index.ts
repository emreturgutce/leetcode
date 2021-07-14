export function permute(nums: number[]): number[][] {
  const permutations: number[][] = [];
  backtrack(permutations, nums, []);
  return permutations;
}

function backtrack(
  permutations: number[][],
  nums: number[],
  arr: number[],
): void {
  if (arr.length === nums.length) {
    permutations.push([...arr]);
    return;
  }

  for (const num of nums) {
    if (arr.includes(num)) {
      continue;
    }

    arr.push(num);
    backtrack(permutations, nums, arr);
    arr.pop();
  }
}

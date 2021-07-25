export function majorityElement(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  let maxEl = nums[0];
  const occurrences = new Map<number, number>();

  for (const num of nums) {
    const occurred = (occurrences.get(num) ?? 0) + 1;
    max = Math.max(occurred, max);
    if (max === occurred) {
      maxEl = num;
    }
    occurrences.set(num, occurred);
  }

  return maxEl;
}

export function boyerMooreVotingAlgorithm(nums: number[]): number {
  let count = 0;
  let candidate = nums[0];

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

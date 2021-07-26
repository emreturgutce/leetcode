export function findDuplicate(nums: number[]): number {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }

  return -1;
}

export function findDuplicateBinarySearch(nums: number[]): number {
  let low = 1;
  let high = nums.length - 1;
  let duplicate = -1;

  while (low <= high) {
    let curr = Math.floor((low + high) / 2);
    let count = 0;

    for (const num of nums) {
      if (num <= curr) {
        count++;
      }
    }

    if (count > curr) {
      duplicate = curr;
      high = curr - 1;
    } else {
      low = curr + 1;
    }
  }

  return duplicate;
}

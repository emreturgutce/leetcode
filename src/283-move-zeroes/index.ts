export function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          const temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
          break;
        }
      }
    }
  }
}

export function moveZeroesFaster(nums: number[]): void {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

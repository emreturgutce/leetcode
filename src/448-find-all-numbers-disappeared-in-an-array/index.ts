/**
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  const length = nums.length;
  const table = new Array<number>(length + 1).fill(0);
  const res: number[] = [];

  for (const num of nums) {
    table[num] = 1;
  }

  for (let i = 1; i <= length; i++) {
    if (table[i] === 0) {
      res.push(i);
    }
  }

  return res;
}

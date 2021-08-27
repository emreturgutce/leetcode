/**
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (map.has(comp) && map.get(comp) !== i) {
      res.push(i);
      res.push(map.get(comp) as number);
      return res;
    }
  }

  return res;
}

export function countBits(n: number): number[] {
  const result = [0];

  for (let i = 1; i <= n; i++) {
    if (isPowerOf2(i)) {
      result.push(1);
    } else {
      result.push(helper(i));
    }
  }

  return result;
}

function helper(num: number): number {
  let count = 0;

  while (num !== 0) {
    num &= num - 1;
    count++;
  }

  return count;
}

function isPowerOf2(num: number): boolean {
  return (num & (num - 1)) === 0;
}

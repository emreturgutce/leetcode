export function uniquePaths(m: number, n: number): number {
  return helper(m, n, new Map());
}

function helper(m: number, n: number, memo: Map<string, number>): number {
  if (m === 1 || n === 1) {
    return 1;
  }

  const key = `${m}:${n}`;

  if (memo.has(key)) {
    return memo.get(key) as number;
  }

  memo.set(key, helper(m - 1, n, memo) + helper(m, n - 1, memo));

  return memo.get(key) as number;
}

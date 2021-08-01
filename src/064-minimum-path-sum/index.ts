export function minPathSum(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  return helper(grid, 0, 0, n, m, new Map());
}

function helper(
  grid: number[][],
  i: number,
  j: number,
  n: number,
  m: number,
  memo: Map<string, number>,
): number {
  if (i === n - 1 && j === m - 1) {
    return grid[i][j];
  }

  if (i >= n || j >= m) {
    return Number.MAX_SAFE_INTEGER;
  }

  const key = `${i}:${j}`;

  if (memo.has(key)) {
    return memo.get(key) as number;
  }

  memo.set(
    key,
    Math.min(
      helper(grid, i + 1, j, n, m, memo),
      helper(grid, i, j + 1, n, m, memo),
    ) + grid[i][j],
  );

  return memo.get(key) as number;
}

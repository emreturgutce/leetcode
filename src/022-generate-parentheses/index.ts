export function generateParenthesis(n: number): string[] {
  const combinations: string[] = [];
  backtrack(combinations, n);
  return combinations;
}

function backtrack(
  combinations: string[],
  max: number,
  curr = '',
  open = 0,
  close = 0,
): void {
  if (curr.length === max * 2) {
    combinations.push(curr);
    return;
  }

  if (open < max) {
    backtrack(combinations, max, curr + '(', open + 1, close);
  }

  if (close < open) {
    backtrack(combinations, max, curr + ')', open, close + 1);
  }
}

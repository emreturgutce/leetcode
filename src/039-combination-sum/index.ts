export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const res: number[][] = [];
  helper(candidates, target, res, [], 0);
  return res;
}

function helper(
  candidates: number[],
  target: number,
  res: number[][],
  curr: number[],
  idx: number,
): void {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    res.push([...curr]);
    return;
  }

  for (let i = idx; i < candidates.length; i++) {
    const currCandidate = candidates[i];
    curr.push(currCandidate);
    helper(candidates, target - currCandidate, res, curr, i);
    curr.pop();
  }
}

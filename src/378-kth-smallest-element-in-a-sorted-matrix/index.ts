export function kthSmallest(matrix: number[][], k: number): number {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
}

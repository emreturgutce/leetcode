export function rotate(matrix: number[][]): void {
  const matrixLength = matrix.length;

  // Getting the transpose of the matrix
  for (let i = 0; i < matrixLength; i++) {
    for (let j = i; j < matrixLength; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Rotating the matrix horizontally
  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < Math.floor(matrixLength / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrixLength - j - 1];
      matrix[i][matrixLength - j - 1] = temp;
    }
  }
}

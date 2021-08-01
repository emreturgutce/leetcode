import { minPathSum } from './index';

describe('Minimum Path Sum', function () {
  it('Minimum Path Sum', function () {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    const res = minPathSum(grid);
    expect(res).toEqual(7);
  });

  it('Minimum Path Sum', function () {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const res = minPathSum(grid);
    expect(res).toEqual(12);
  });
});

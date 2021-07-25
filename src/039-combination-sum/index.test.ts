import { combinationSum } from './index';

describe('Combination sum', function () {
  it('should list all unique combinations for given target', function () {
    const res = combinationSum([2, 3, 6, 7], 7);
    expect(res).toEqual([[2, 2, 3], [7]]);
  });

  it('should list all unique combinations for given target', function () {
    const res = combinationSum([2, 3, 5], 8);
    expect(res).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  it('should list all unique combinations for given target', function () {
    const res = combinationSum([2], 1);
    expect(res).toEqual([]);
  });
});

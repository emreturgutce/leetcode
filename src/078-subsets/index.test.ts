import { subsets } from './index';

describe.only('Subsets', function () {
  it('should find all subsets of an array', function () {
    const nums = [1, 2, 3];
    const result = subsets(nums);
    expect(result.sort()).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ].sort());
  });
});

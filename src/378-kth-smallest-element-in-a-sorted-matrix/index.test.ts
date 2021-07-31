import { kthSmallest } from './index';

describe('Kth Smallest Element in a Sorted Matrix', function () {
  it('Kth Smallest Element in a Sorted Matrix', function () {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ];
    const res = kthSmallest(matrix, 8);
    expect(res).toEqual(13);
  });

  it('Kth Smallest Element in a Sorted Matrix', function () {
    const matrix = [[-5]];
    const res = kthSmallest(matrix, 1);
    expect(res).toEqual(-5);
  });
});

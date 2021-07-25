import { findKthLargest } from './index';

describe('Kth largest element in an array', function () {
  it('should find the kth latgest element in an array', function () {
    const el = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    expect(el).toEqual(5);
  });
});

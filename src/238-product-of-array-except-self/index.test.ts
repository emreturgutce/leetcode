import { productExceptSelf } from './index';

describe.only('Product of array except self', function () {
  it('product of array except self', function () {
    const result = productExceptSelf([1, 2, 3, 4]);

    expect(result).toEqual([24, 12, 8, 6]);
  });
});

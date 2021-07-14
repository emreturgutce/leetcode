import { singleNumber } from './index';

describe.only('Find the single one', function () {
  it('Should find the single number that has occurred in the array', function () {
    const num = singleNumber([2, 2, 1]);

    expect(num).toEqual(1);
  });

  it('Should find the single number that has occurred in the array', function () {
    const num = singleNumber([4, 1, 2, 1, 2]);

    expect(num).toEqual(4);
  });

  it('Should find the single number that has occurred in the array', function () {
    const num = singleNumber([1]);

    expect(num).toEqual(1);
  });
});

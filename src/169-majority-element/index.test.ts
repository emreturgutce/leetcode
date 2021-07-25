import { majorityElement } from './index';

describe('Majority element', function () {
  it('should return majority element', function () {
    const res = majorityElement([3, 2, 3]);
    expect(res).toEqual(3);
  });

  it('should return majority element', function () {
    const res = majorityElement([2, 2, 1, 1, 1, 2, 2]);
    expect(res).toEqual(2);
  });
});

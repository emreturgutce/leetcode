import { findDisappearedNumbers } from './index';

describe('Find All Numbers Disappeared in an Array', function () {
  it('Find All Numbers Disappeared in an Array', function () {
    const res = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

    expect(res).toEqual([5, 6]);
  });

  it('Find All Numbers Disappeared in an Array', function () {
    const res = findDisappearedNumbers([1, 1]);

    expect(res).toEqual([2]);
  });
});

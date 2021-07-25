import { moveZeroes, moveZeroesFaster } from './index';

describe.only('Move zeroes', function () {
  it('move zeroes', function () {
    const res = [0, 1, 0, 3, 12];
    moveZeroes(res);
    expect(res).toEqual([1, 3, 12, 0, 0]);
  });

  it('move zeroes', function () {
    const res = [0, 1, 0, 3, 12];
    moveZeroesFaster(res);
    expect(res).toEqual([1, 3, 12, 0, 0]);
  });
});

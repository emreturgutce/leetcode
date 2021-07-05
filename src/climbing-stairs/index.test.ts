import { climbStairs } from './index';

describe('Climbing Stairs', function () {
  it('Should be 3', function () {
    const got = climbStairs(3);
    expect(got).toEqual(3);
  });
});

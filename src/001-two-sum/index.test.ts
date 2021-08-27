import { twoSum } from './index';

describe('Two Sum', () => {
  it('should calculate two sum', () => {
    const res = twoSum([2, 7, 11, 15], 9);

    expect(res).toEqual([0, 1]);
  });

  it('should calculate two sum', () => {
    const res = twoSum([3, 2, 4], 6);

    expect(res).toEqual([1, 2]);
  });

  it('should calculate two sum', () => {
    const res = twoSum([3, 3], 6);

    expect(res).toEqual([0, 1]);
  });
});

import { uniquePaths } from './index';

describe('Unique Paths', function () {
  it('Unique Paths', function () {
    const res = uniquePaths(3, 7);
    expect(res).toEqual(28);
  });

  it('Unique Paths', function () {
    const res = uniquePaths(3, 2);
    expect(res).toEqual(3);
  });

  it('Unique Paths', function () {
    const res = uniquePaths(7, 3);
    expect(res).toEqual(28);
  });

  it('Unique Paths', function () {
    const res = uniquePaths(3, 3);
    expect(res).toEqual(6);
  });
});

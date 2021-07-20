import { countSubstrings } from './index';

describe('Palindromic Substring', function () {
  it('should find the number of palindromic substrings in "abc" string', function () {
    const count = countSubstrings('abc');

    expect(count).toEqual(3);
  });

  it('should find the number of palindromic substrings in "aaa" string', function () {
    const count = countSubstrings('aaa');

    expect(count).toEqual(6);
  });
});

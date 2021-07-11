import { generateParenthesis } from './index';

describe('Generate Parenthesis', function () {
  it('should generate all combinations', function () {
    const combinations = generateParenthesis(3);

    expect(combinations.length).toEqual(5);
    expect(combinations).toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
  });
});

import { permute } from './index';

describe.only('All possible permutations', function () {
  it('Should calculate all possible permutations', function () {
    const permutations = permute([1, 2, 3]);

    expect(permutations).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it('Should calculate all possible permutations', function () {
    const permutations = permute([0, 1]);

    expect(permutations).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  it('Should calculate all possible permutations', function () {
    const permutations = permute([1]);

    expect(permutations).toEqual([[1]]);
  });
});

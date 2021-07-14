import { countBits } from './index';

describe('Counting bits', function () {
  it("Should get the number of 1's in the binary representation", function () {
    const result = countBits(2);

    expect(result).toEqual([0, 1, 1]);
  });

  it("Should get the number of 1's in the binary representation", function () {
    const result = countBits(5);

    expect(result).toEqual([0, 1, 1, 2, 1, 2]);
  });
});

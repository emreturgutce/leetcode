import { dailyTemperatures } from './index';

describe('Daily temperatures', function () {
  it('Daily temperatures', function () {
    const res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

    expect(res).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it('Daily temperatures', function () {
    const res = dailyTemperatures([77, 77, 77, 77, 77, 41, 77, 41, 41, 77]);

    expect(res).toEqual([0, 0, 0, 0, 0, 1, 0, 2, 1, 0]);
  });
});

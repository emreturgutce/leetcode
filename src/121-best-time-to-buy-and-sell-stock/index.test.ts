import { maxProfit } from './index';

describe.only('Best time to buy and sell stock', function () {
  it('Should calculate successfully', function () {
    const profit = maxProfit([7, 1, 5, 3, 6, 4]);

    expect(profit).toEqual(5);
  });
});

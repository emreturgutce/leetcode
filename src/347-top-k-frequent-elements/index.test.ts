import { topKFrequent } from './index';

describe('Top k frequent elements', function () {
  it('should get the top 2 most frequent elements', function () {
    const els = topKFrequent([1, 1, 1, 2, 2, 3], 2);

    expect(els).toEqual([1, 2]);
  });

  it('should get the top 1 most frequent elements', function () {
    const els = topKFrequent([1], 1);

    expect(els).toEqual([1]);
  });
});

import { partitionLabels } from './index';

describe.only('Partition Labels', function () {
  it('Partition Labels', function () {
    const str = 'ababcbacadefegdehijhklij';

    const partitions = partitionLabels(str);

    expect(partitions).toEqual([9, 7, 8]);
  });

  it('Partition Labels', function () {
    const str = 'eccbbbbdec';

    const partitions = partitionLabels(str);

    expect(partitions).toEqual([10]);
  });
});

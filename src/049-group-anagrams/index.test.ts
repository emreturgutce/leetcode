import { groupAnagrams } from './index';

describe.only('Group Anagrams', function () {
  it('should group the anagrams together', function () {
    const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    expect(res).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});

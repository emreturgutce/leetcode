export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const result: string[][] = [];

  for (const str of strs) {
    const sortedString = str.split('').sort().join('');
    const vals = map.get(sortedString) ?? [];
    vals.push(str);
    map.set(sortedString, vals);
  }

  for (const mapKey of map.keys()) {
    result.push(map.get(mapKey) as string[]);
  }

  return result;
}

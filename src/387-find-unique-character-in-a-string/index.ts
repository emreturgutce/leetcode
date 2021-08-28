export function firstUniqChar(s: string): number {
  let idx = -1;
  const map = new Map<string, [number, number]>(); // [idx, count]

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const [_, count] = map.get(s[i]) as [number, number];
      map.set(s[i], [i, count + 1]);
    } else {
      map.set(s[i], [i, 1]);
    }
  }

  for (const key of map.keys()) {
    const [index, count] = map.get(key) as [number, number];

    if (count === 1) {
      idx = index;
			break;
    }
  }

  return idx;
}

export function isValid(s: string): boolean {
  const stack: string[] = [];

  const map = new Map<string, string>();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]) as string);
    } else if (stack.pop() != s[i]) {
      return false;
    }
  }

  return !stack.length;
}

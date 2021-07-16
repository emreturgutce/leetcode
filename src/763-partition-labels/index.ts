export function partitionLabels(s: string): number[] {
  const result: number[] = [];

  if (!s.length) {
    return result;
  }

  const lastIndices = new Array<number>(26).fill(0);

  // Get last occurrences for all the characters in the string.
  for (let i = 0; i < s.length; i++) {
    lastIndices[getCharIndex(s, i)] = i;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndices[getCharIndex(s, i)]);

    // We found a partition
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }

  return result;
}

/**
 * Gets a char code of the character in the given index.
 * Char code between 0 and 25.
 */
function getCharIndex(str: string, idx: number): number {
  return str.charAt(idx).charCodeAt(0) - 97;
}

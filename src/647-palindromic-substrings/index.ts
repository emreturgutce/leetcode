/**
 * Time Complexity: O(n^2) 
 * Space Complexity: O(1)
 */
export function countSubstrings(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += countPalindrome(i, i, s) + countPalindrome(i, i + 1, s);;
  }

  return result;
}

function countPalindrome(left: number, right: number, s: string): number {
  let result = 0;

  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    result++;
    left--;
    right++;
  }

  return result;
}
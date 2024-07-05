// Palindromic Substrings - MEDIUM
// https://leetcode.com/problems/palindromic-substrings/
// Time: O(n^2), Space: O(1)

function countSubstrings(s: string): number {
    function expand(left: number, right: number, s: string): number {
      const res = [];

      while (left >= 0 && right < s.length && s[left] === s[right]) {
        res.push(s.substring(left, right));
        left--;
        right++;
      }

      return res.length;
    }

    let nums = 0;
    for (let i = 0; i < s.length; i++) {
      nums += expand(i, i, s);
      nums += expand(i, i + 1, s);
    }

    return nums;
  }

console.log(countSubstrings("abc") === 3)
console.log(countSubstrings("aaa") === 6)
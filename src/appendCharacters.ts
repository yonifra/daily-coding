// 2486. Append Characters to String to Make Subsequence
// Difficulty: Medium
// Link: https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
// You are given two strings s and t consisting of only lowercase English letters.
// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

function appendCharacters(s: string, t: string): number {
    let tIndex = 0

    for (let sIndex = 0; sIndex < s.length; sIndex++) {
        if (s.charAt(sIndex) === t.charAt(tIndex)) {
            tIndex++
        }
    }

    return t.length - tIndex
}

console.log(appendCharacters('ab', 'abc'))
console.log(appendCharacters('coaching', 'coding'))
console.log(appendCharacters('z', 'abcde'))
console.log(appendCharacters('abcde', 'a'))

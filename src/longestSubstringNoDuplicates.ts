// Longest Substring Without Repeating Characters - [MEDIUM]
// Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
    if (!s || s.length === 0) {
        return 0
    }

    if (s.length === 1) {
        return 1
    }

    let left = 0
    let right = 1
    let maxLength = 1

    while (left < s.length) {
        const substring = s.slice(left, right - left)
        const set = new Set(substring.split(''))
        console.log({ size: set.size, substring })
        if (set.size === substring.length) {
            console.log('no duplicates')
            // console.log({maxLength, right, left});
            maxLength = Math.max(maxLength, right - left)
            right++
        } else {
            console.log('duplicate')
            left++
            // if (left === right) {
            //     right++;
            // }
        }
    }

    // maxLength = Math.max(maxLength, right-left)
    return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb')) // 3

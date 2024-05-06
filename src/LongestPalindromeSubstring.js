// https://leetcode.com/problems/longest-palindrome/
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */

// returns the longest palindrome that can is part of the given string
var longestPalindrome = function(s) {
    if (!s || s.length === 0) {
        return 0
    }

    const reversed = s.split('').reverse().join('');

    let counter = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        counter = 0
        let current = i
        for (let j = 0; j < s.length; j++) {
            if (s[current] === reversed[j]) {
                counter++
                current++
                if (max < counter) {
                    max = counter
                }
            } else {
                if (max < counter) {
                    max = counter
                }

                counter = 0
            }
        }
    }

    return max
}

function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(longestPalindrome('abcscba'))
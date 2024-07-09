// Valid Palindrome (EASY)
// https://leetcode.com/problems/valid-palindrome/
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//

function isPalindrome(s: string): boolean {
    const candidate = cleanupString(s)
    let start = 0
    let end = candidate.length - 1

    while (start < end) {
        if (candidate.charAt(start) !== candidate.charAt(end)) {
            return false
        }

        start++
        end--
    }

    return true
}

// returns lowercase alphanumeric only.
// time - O(n) space - O(n)
function cleanupString(s: string): string {
    const arr = []
    const aCode = 'a'.charCodeAt(0)
    const zCode = 'z'.charCodeAt(0)
    s = s.toLowerCase()

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i)
        if (
            (charCode >= aCode && charCode <= zCode) ||
            (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0))
        ) {
            arr.push(s.charAt(i))
        }
    }

    return arr.join()
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

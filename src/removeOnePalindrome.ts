// Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Solution runtime is O(n) since we scan the input from both sides until we reach the middle.

const removeOnePalindrome = (str: String): boolean => {
    let left: number = 0
    let right: number = str.length - 1
    let firstMismatch: boolean = false

    while (left < right) {
        if (str[left] === str[right]) {
            left++
            right--
        } else if (!firstMismatch) {
            firstMismatch = true

            if (str[left + 1] === str[right]) {
                left++
            } else if (str[right - 1] === str[left]) {
                right--
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return true
}

console.log(removeOnePalindrome('aba'))
console.log(removeOnePalindrome('abcba'))
console.log(removeOnePalindrome('foobof'))
console.log(removeOnePalindrome('abccab'))

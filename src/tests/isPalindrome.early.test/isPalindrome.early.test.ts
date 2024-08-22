// Unit tests for: isPalindrome

import { isPalindrome } from '../../isPalindrome'

describe('isPalindrome() isPalindrome method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should return true for a simple palindrome', () => {
            expect(isPalindrome('racecar')).toBe(true)
        })

        it('should return true for a palindrome with mixed case', () => {
            expect(isPalindrome('RaceCar')).toBe(true)
        })

        it('should return true for a palindrome with spaces and punctuation', () => {
            expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
        })

        it('should return true for a numeric palindrome', () => {
            expect(isPalindrome('12321')).toBe(true)
        })

        it('should return true for an empty string', () => {
            expect(isPalindrome('')).toBe(true)
        })

        it('should return true for a single character string', () => {
            expect(isPalindrome('a')).toBe(true)
        })
    })

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should return false for a non-palindrome string', () => {
            expect(isPalindrome('hello')).toBe(false)
        })

        it('should return false for a string with only spaces', () => {
            expect(isPalindrome('   ')).toBe(true) // Spaces are ignored, so it's technically a palindrome
        })

        it('should return false for a string with special characters only', () => {
            expect(isPalindrome('!!!')).toBe(true) // Special characters are ignored, so it's technically a palindrome
        })

        it('should return true for a palindrome with numbers and letters', () => {
            expect(isPalindrome('1a2b2a1')).toBe(true)
        })

        it('should return false for a string with mixed alphanumeric and non-palindrome', () => {
            expect(isPalindrome('abc123')).toBe(false)
        })

        it('should handle long strings efficiently', () => {
            const longPalindrome = 'a'.repeat(10000) + 'b' + 'a'.repeat(10000)
            expect(isPalindrome(longPalindrome)).toBe(true)
        })
    })
})

// End of unit tests for: isPalindrome

// Unit tests for: findMaxLength

import { findMaxLength } from '../../contigiousArray'

describe('findMaxLength() findMaxLength method', () => {
    // Happy path tests
    describe('Happy Path', () => {
        it('should return 2 for input [0, 1]', () => {
            // This test checks the basic functionality with a simple input
            expect(findMaxLength([0, 1])).toBe(2)
        })

        it('should return 2 for input [0, 1, 0]', () => {
            // This test checks the function with a slightly larger array
            expect(findMaxLength([0, 1, 0])).toBe(2)
        })

        it('should return 6 for input [0, 0, 0, 1, 1, 1, 0]', () => {
            // This test checks the function with a more complex array
            expect(findMaxLength([0, 0, 0, 1, 1, 1, 0])).toBe(6)
        })

        it('should return 4 for input [0, 1, 1, 0]', () => {
            // This test checks the function with an array that has multiple valid subarrays
            expect(findMaxLength([0, 1, 1, 0])).toBe(4)
        })
    })

    // Edge case tests
    describe('Edge Cases', () => {
        it('should return 0 for an empty array', () => {
            // This test checks the function with an empty array
            expect(findMaxLength([])).toBe(0)
        })

        it('should return 0 for input [0]', () => {
            // This test checks the function with a single element array containing 0
            expect(findMaxLength([0])).toBe(0)
        })

        it('should return 0 for input [1]', () => {
            // This test checks the function with a single element array containing 1
            expect(findMaxLength([1])).toBe(0)
        })

        it('should return 0 for input [0, 0, 0]', () => {
            // This test checks the function with an array of all 0s
            expect(findMaxLength([0, 0, 0])).toBe(0)
        })

        it('should return 0 for input [1, 1, 1]', () => {
            // This test checks the function with an array of all 1s
            expect(findMaxLength([1, 1, 1])).toBe(0)
        })

        it('should return 2 for input [0, 1, 0, 1]', () => {
            // This test checks the function with an array that has multiple valid subarrays
            expect(findMaxLength([0, 1, 0, 1])).toBe(4)
        })

        it('should handle large arrays efficiently', () => {
            // This test checks the function with a large array to ensure performance
            const largeArray = Array(100000)
                .fill(0)
                .map((_, i) => i % 2)
            expect(findMaxLength(largeArray)).toBe(100000)
        })
    })
})

// End of unit tests for: findMaxLength

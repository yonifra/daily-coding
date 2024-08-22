// Unit tests for: checkSubarraySum

import { checkSubarraySum } from '../../continuusSubarraySum'

describe('checkSubarraySum() checkSubarraySum method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should return true for a subarray [2, 4] that sums to a multiple of 6', () => {
            const result = checkSubarraySum([23, 2, 4, 6, 7], 6)
            expect(result).toBe(true)
        })

        it('should return true for a subarray [23, 2, 6, 4, 7] that sums to a multiple of 6', () => {
            const result = checkSubarraySum([23, 2, 6, 4, 7], 6)
            expect(result).toBe(true)
        })

        it('should return true for a subarray [2, 4] that sums to a multiple of 6', () => {
            const result = checkSubarraySum([2, 4, 3], 6)
            expect(result).toBe(true)
        })
    })

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should return false for an array with no subarray of size at least 2 that sums to a multiple of k', () => {
            const result = checkSubarraySum([1, 2, 3], 8)
            expect(result).toBe(false)
        })

        it('should return false for an array with only one element', () => {
            const result = checkSubarraySum([5], 5)
            expect(result).toBe(false)
        })

        it('should return false for an empty array', () => {
            const result = checkSubarraySum([], 5)
            expect(result).toBe(false)
        })

        it('should handle k = 0 and return false for non-zero elements', () => {
            const result = checkSubarraySum([1, 2, 3], 0)
            expect(result).toBe(false)
        })

        it('should handle k = 0 and return true for consecutive zero elements', () => {
            const result = checkSubarraySum([0, 0, 0], 0)
            expect(result).toBe(true)
        })

        it('should return true for a subarray [0, 0] that sums to a multiple of k', () => {
            const result = checkSubarraySum([0, 0, 1, 2], 1)
            expect(result).toBe(true)
        })

        it('should handle negative numbers correctly', () => {
            const result = checkSubarraySum([-1, -1, 2], 1)
            expect(result).toBe(true)
        })

        it('should return true for a subarray [0, 0] that sums to a multiple of k even if k is negative', () => {
            const result = checkSubarraySum([0, 0, 1, 2], -1)
            expect(result).toBe(true)
        })
    })
})

// End of unit tests for: checkSubarraySum

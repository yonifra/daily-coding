// Unit tests for: findPointInMostSegments

import { findPointInMostSegments } from '../../src/pointInMostSegments'

describe('findPointInMostSegments() findPointInMostSegments method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should return the point that appears in the most segments for overlapping segments', () => {
            const segments = [
                [1, 3],
                [2, 4],
                [3, 5],
                [4, 6],
            ]
            expect(findPointInMostSegments(segments)).toBe(3)
        })

        it('should return the correct point when all segments overlap at a single point', () => {
            const segments = [
                [1, 5],
                [2, 5],
                [3, 5],
                [4, 5],
            ]
            expect(findPointInMostSegments(segments)).toBe(4)
        })

        it('should return the correct point when segments overlap at multiple points', () => {
            const segments = [
                [1, 4],
                [2, 6],
                [3, 5],
                [4, 7],
            ]
            expect(findPointInMostSegments(segments)).toBe(4)
        })
    })

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should handle an empty list of segments', () => {
            const segments: number[][] = []
            expect(findPointInMostSegments(segments)).toBe(-1)
        })

        it('should handle segments with the same start and end point', () => {
            const segments = [
                [1, 1],
                [2, 2],
                [3, 3],
            ]
            expect(findPointInMostSegments(segments)).toBe(1)
        })

        it('should handle segments with no overlap', () => {
            const segments = [
                [1, 2],
                [3, 4],
                [5, 6],
            ]
            expect(findPointInMostSegments(segments)).toBe(1)
        })

        it('should handle segments with negative numbers', () => {
            const segments = [
                [-3, -1],
                [-2, 0],
                [-1, 1],
            ]
            expect(findPointInMostSegments(segments)).toBe(-1)
        })

        it('should handle segments with large numbers', () => {
            const segments = [
                [1000000, 2000000],
                [1500000, 2500000],
                [2000000, 3000000],
            ]
            expect(findPointInMostSegments(segments)).toBe(2000000)
        })
    })
})

// End of unit tests for: findPointInMostSegments

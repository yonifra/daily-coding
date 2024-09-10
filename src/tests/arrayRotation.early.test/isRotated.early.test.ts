
// Unit tests for: isRotated

import { isRotated } from '../../arrayRotation';

describe('isRotated() isRotated method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should return true for a rotated sorted array', () => {
            // The array [4, 5, 1, 2, 3] is a rotation of [1, 2, 3, 4, 5]
            expect(isRotated([4, 5, 1, 2, 3])).toBe(true);
        });

        it('should return false for a non-rotated unsorted array', () => {
            // The array [4, 5, 1, 2, 3, 6] is not a rotation of any sorted array
            expect(isRotated([4, 5, 1, 2, 3, 6])).toBe(false);
        });

        it('should return true for a non-rotated sorted array', () => {
            // The array [1, 2, 3, 4, 5] is already sorted
            expect(isRotated([1, 2, 3, 4, 5])).toBe(true);
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should return true for an empty array', () => {
            // An empty array is trivially sorted
            expect(isRotated([])).toBe(true);
        });

        it('should return true for a single-element array', () => {
            // A single-element array is trivially sorted
            expect(isRotated([1])).toBe(true);
        });

        it('should return true for a two-element rotated sorted array', () => {
            // The array [2, 1] is a rotation of [1, 2]
            expect(isRotated([2, 1])).toBe(true);
        });

        it('should return true for a two-element unsorted array', () => {
            // The array [2, 3] is not a rotation of any sorted array, but it's sorted
            expect(isRotated([2, 3])).toBe(true);
        });

        it('should return true for an array with duplicate elements that is a valid rotation', () => {
            // The array [3, 3, 1, 2, 2] is a valid rotation of a sorted array
            expect(isRotated([3, 3, 1, 2, 2])).toBe(true);
        });

        it('should return true for an array with duplicate elements that is a valid rotation', () => {
            // The array [2, 3, 3, 1, 2] is a valid rotation of [1, 2, 2, 3, 3]
            expect(isRotated([2, 3, 3, 1, 2])).toBe(true);
        });
    });
});

// End of unit tests for: isRotated

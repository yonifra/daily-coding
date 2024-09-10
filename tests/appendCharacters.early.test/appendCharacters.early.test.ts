
// Unit tests for: appendCharacters

import { appendCharacters } from '../../src/appendCharacters';

describe('appendCharacters() appendCharacters method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should return 1 when t is "abc" and s is "ab"', () => {
            expect(appendCharacters('ab', 'abc')).toBe(1);
        });

        it('should return 4 when t is "coding" and s is "coaching"', () => {
            expect(appendCharacters('coaching', 'coding')).toBe(4);
        });

        it('should return 0 when t is "a" and s is "abcde"', () => {
            expect(appendCharacters('abcde', 'a')).toBe(0);
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should return 5 when t is "abcde" and s is "z"', () => {
            expect(appendCharacters('z', 'abcde')).toBe(5);
        });

        it('should return 0 when both s and t are empty strings', () => {
            expect(appendCharacters('', '')).toBe(0);
        });

        it('should return the length of t when s is an empty string', () => {
            expect(appendCharacters('', 'abc')).toBe(3);
        });

        it('should return 0 when t is an empty string', () => {
            expect(appendCharacters('abc', '')).toBe(0);
        });

        it('should return 0 when s and t are identical', () => {
            expect(appendCharacters('abc', 'abc')).toBe(0);
        });

        it('should return the length of t when s has no matching characters', () => {
            expect(appendCharacters('xyz', 'abc')).toBe(3);
        });

        it('should handle large input sizes efficiently', () => {
            const largeS = 'a'.repeat(100000);
            const largeT = 'a'.repeat(100000);
            expect(appendCharacters(largeS, largeT)).toBe(0);
        });
    });
});

// End of unit tests for: appendCharacters

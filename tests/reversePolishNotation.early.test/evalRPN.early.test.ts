
// Unit tests for: evalRPN

import { evalRPN } from '../../src/reversePolishNotation';

describe('evalRPN() evalRPN method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {
        it('should correctly evaluate a simple addition and multiplication expression', () => {
            // Test for expression: ((2 + 1) * 3) = 9
            const tokens = ['2', '1', '+', '3', '*'];
            const result = evalRPN(tokens);
            expect(result).toBe(9);
        });

        it('should correctly evaluate an expression with division and addition', () => {
            // Test for expression: (4 + (13 / 5)) = 6
            const tokens = ['4', '13', '5', '/', '+'];
            const result = evalRPN(tokens);
            expect(result).toBe(6);
        });

        it('should correctly evaluate a complex expression with multiple operations', () => {
            // Test for expression: ((10 * (6 / ((9 + 3) * -11))) + 17 + 5) = 22
            const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
            const result = evalRPN(tokens);
            expect(result).toBe(22);
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should handle a single number as input', () => {
            // Test for a single number input
            const tokens = ['42'];
            const result = evalRPN(tokens);
            expect(result).toBe(42);
        });

        it('should handle negative numbers correctly', () => {
            // Test for expression: (-4 + 2) = -2
            const tokens = ['-4', '2', '+'];
            const result = evalRPN(tokens);
            expect(result).toBe(-2);
        });

        it('should handle division resulting in truncation towards zero', () => {
            // Test for expression: (7 / 3) = 2 (truncated towards zero)
            const tokens = ['7', '3', '/'];
            const result = evalRPN(tokens);
            expect(result).toBe(2);
        });

        it('should handle large numbers and ensure 32-bit integer representation', () => {
            // Test for large numbers within 32-bit integer range
            const tokens = ['2147483647', '1', '+'];
            const result = evalRPN(tokens);
            expect(result).toBe(2147483648);
        });
    });
});

// End of unit tests for: evalRPN

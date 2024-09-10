
// Unit tests for: averageOfLevels

import { averageOfLevels } from '../../averageOfLevels';

// MockTreeNode class to simulate TreeNode behavior
class MockTreeNode {
    val: number = 0;
    left: MockTreeNode | null = null;
    right: MockTreeNode | null = null;

    constructor(val?: number, left?: MockTreeNode | null, right?: MockTreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// Import the function to be tested
describe('averageOfLevels() averageOfLevels method', () => {
    // Happy path tests
    describe('Happy Path', () => {
        it('should return the average of levels for a balanced tree', () => {
            // Create a balanced tree
            const root = new MockTreeNode(3,
                new MockTreeNode(9),
                new MockTreeNode(20, new MockTreeNode(15), new MockTreeNode(7))
            ) as any;

            // Call the function and assert the result
            const result = averageOfLevels(root);
            expect(result).toEqual([3, 14.5, 11]);
        });

        it('should return the average of levels for a single node tree', () => {
            // Create a single node tree
            const root = new MockTreeNode(5) as any;

            // Call the function and assert the result
            const result = averageOfLevels(root);
            expect(result).toEqual([5]);
        });
    });

    // Edge case tests
    describe('Edge Cases', () => {
        it('should return an empty array for a null root', () => {
            // Call the function with null root
            const result = averageOfLevels(null as any);
            expect(result).toEqual([]);
        });

        it('should handle a tree with negative values', () => {
            // Create a tree with negative values
            const root = new MockTreeNode(-3,
                new MockTreeNode(-9),
                new MockTreeNode(-20, new MockTreeNode(-15), new MockTreeNode(-7))
            ) as any;

            // Call the function and assert the result
            const result = averageOfLevels(root);
            expect(result).toEqual([-3, -14.5, -11]);
        });

        it('should handle a tree with only left children', () => {
            // Create a tree with only left children
            const root = new MockTreeNode(1,
                new MockTreeNode(2,
                    new MockTreeNode(3,
                        new MockTreeNode(4)
                    )
                )
            ) as any;

            // Call the function and assert the result
            const result = averageOfLevels(root);
            expect(result).toEqual([1, 2, 3, 4]);
        });

        it('should handle a tree with only right children', () => {
            // Create a tree with only right children
            const root = new MockTreeNode(1, null,
                new MockTreeNode(2, null,
                    new MockTreeNode(3, null,
                        new MockTreeNode(4)
                    )
                )
            ) as any;

            // Call the function and assert the result
            const result = averageOfLevels(root);
            expect(result).toEqual([1, 2, 3, 4]);
        });
    });
});

// End of unit tests for: averageOfLevels

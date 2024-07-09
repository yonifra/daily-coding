// LeetCode: #543 Diameter of Binary Tree
// Link: https://leetcode.com/problems/diameter-of-binary-tree/description/
// Difficulty: Easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root: any): number {
    let diameter = 0

    const maxDepth = (node: any): number => {
        if (!node) return 0

        const leftDepth = maxDepth(node.left)
        const rightDepth = maxDepth(node.right)

        diameter = Math.max(diameter, leftDepth + rightDepth)

        return 1 + Math.max(leftDepth, rightDepth)
    }

    maxDepth(root)
    return diameter
}

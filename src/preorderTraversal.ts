// Preorder Traversal [EASY]
// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    return preorderRecursive(root, [])
}

function preorderRecursive(root: TreeNode | null, arr: number[]): number[] {
    if (!root) return arr

    arr.push(root.val)
    preorderRecursive(root.left, arr)
    preorderRecursive(root.right, arr)

    return arr
}

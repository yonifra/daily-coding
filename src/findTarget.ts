/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 */
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

interface TreeNode {
    val: number
    right: TreeNode
    left: TreeNode
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root: TreeNode, k: number): boolean {
    // Traverse the tree, adding each (k-node value) to a set
    // If we find a node that is in the set, return true

    const set = new Set()

    const traverse = (node: TreeNode): boolean => {
        if (!node) return false
        if (set.has(node.val)) return true
        set.add(k - node.val)
        return traverse(node.left) || traverse(node.right)
    }

    return traverse(root)
}
// @lc code=end

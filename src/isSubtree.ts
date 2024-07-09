// Subtree of Another Tree - EASY
// https://leetcode.com/problems/subtree-of-another-tree/
// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false
    if (isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// Time Complexity: O(N * M)

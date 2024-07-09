// Invert Binary Tree - EASY
// Given the root of a binary tree, invert the tree, and return its root.
// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root: TreeNode): TreeNode {
    if (!root) {
        return root
    }

    // invert
    const left = root.left
    const right = root.right
    root.right = left
    root.left = right

    invertTree(root.right)
    invertTree(root.left)

    return root
}

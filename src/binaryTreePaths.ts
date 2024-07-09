// Source: https://leetcode.com/problems/binary-tree-paths/
// Binary tree paths [EASY]
// Given a binary tree, return all root-to-leaf paths.
// Note: A leaf is a node with no children.
// Example:
// Input:
//    1
//  /   \
// 2     3
//  \
//   5
// Output: ["1->2->5", "1->3"]
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: Set<string> = new Set()

    if (!root) {
        return []
    }

    if (!root.left && !root.right) {
        return [root.val.toString()]
    }

    rec(root.right, [root.val], paths)
    rec(root.left, [root.val], paths)

    return Array.from(paths.values())
}

function rec(root: TreeNode | null, currentPath: number[], paths: Set<string>) {
    if (!root) {
        return
    }

    if (!root.right && !root.left) {
        // If we are at a leaf node
        currentPath.push(root.val)
        paths.add(currentPath.join('->'))
        return
    }

    currentPath.push(root.val)

    rec(root.right, [...currentPath], paths)
    rec(root.left, [...currentPath], paths)
}

// Test cases
console.log(
    binaryTreePaths(
        new TreeNode(
            1,
            new TreeNode(2, null, new TreeNode(5, null, null)),
            new TreeNode(3, null, null),
        ),
    ),
) // ["1->2->5", "1->3"]

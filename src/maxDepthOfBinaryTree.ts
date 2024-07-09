// Binary tree max depth
// Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/

interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxDepth = function (root: TreeNode): number {
    // Cases where the tree is empty or contains just one node
    if (!root) return 0
    if (!root.right && !root.left) return 1

    // Check the children recursively
    return Math.max(maxDepthRec(root.right, 1), maxDepthRec(root.left, 1))
}

function maxDepthRec(node: TreeNode, depthSoFar: number): number {
    if (!node) {
        // no node - return the depth you got so far
        return depthSoFar
    }

    // Node is not undefined, so we know this is a new depth, check the children next
    return Math.max(
        maxDepthRec(node.right, depthSoFar + 1),
        maxDepthRec(node.left, depthSoFar + 1),
    )
}

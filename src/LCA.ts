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

// Lowest common ancestor - MEDIUM
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const pPathArr = findPath(root, p);
    const qPathArr = findPath(root, q);

    const minArr = qPathArr.length < pPathArr.length ? qPathArr : pPathArr;
    const maxArr = qPathArr.length < pPathArr.length ? pPathArr : qPathArr;

    for (let i = minArr.length - 1; i >= 0; i--) {
        if (minArr[i] === maxArr[i]) {
            return minArr[i]
        }
    }

    return null;
};

function findPath(root: TreeNode | null, p: TreeNode | null): TreeNode[] {
    if (root.val === p.val) {
        return [root];
    }

    const arr = []

    while(root.val !== p.val) {
        arr.push(root)

        if (root.val > p.val) {
            root = root.left
        } else {
            root = root.right;
        }
    }

    arr.push(p)

    return arr
}
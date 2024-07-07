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

// Binary Tree Level Order Traversal - MEDIUM
// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

function levelOrder(root: TreeNode | null): number[][] {
    // Basically, a BFS traversal of the tree (queue)

    const queue = []
    const answer = []

    queue.push(root)

    while(queue.length) {
        const arr = []

        while(queue.length) {
            const item = queue.pop()
            arr.push(item)
        }

        for (let node of arr) {
            if (node.right) {
                queue.push(node.right)
            }
            if (node.left) {
                queue.push(node.left)
            }
        }

        answer.push(arr.map(n => n.val))
    }

    return answer;
};

// Time Complexity: O(N)
console.log(levelOrder({val: 3, left: {val: 9, left: null, right: null}, right: {val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null}}))  // [[3],[9,20],[15,7]]
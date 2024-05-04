// Balanced Binary Tree - Given a binary tree, determine if it is height-balanced

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    val: number
    right: TreeNode
    left: TreeNode

    constructor(val: number, right: TreeNode, left: TreeNode) {
        this.val = val
        this.right = right
        this.left = left
    }
}

const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, null)))

const isBalanced = function (root) {
  if (!root || isLeaf(root)) {
    return true
  }

  if (Math.abs(getHeight(0, root.left) - getHeight(0, root.right)) > 1) {
    return false
  }

  return isBalanced(root.right) && isBalanced(root.left)
}

function isLeaf(node) {
  return node && node.right === null && node.left === null
}

function getHeight(currentHeight, node) {
  if (!node) {
    return currentHeight
  }

  if (isLeaf(node)) {
    return currentHeight+1
  }

  return Math.max(
    getHeight(currentHeight + 1, node.left),
    getHeight(currentHeight + 1, node.right)
  )
}

console.log(isBalanced(root))

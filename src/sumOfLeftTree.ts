// Given a binary tree, return the sum of all left leaves of the tree. Ex: Given the following tree…

//     5
//    / \
//   2   12
//      /  \
//     3    8
// return 5 (i.e. 2 + 3)
// Ex: Given the following tree…

//        2
//       / \
//     4    2
//    / \
//   3   9
// return 3

interface TreeNode {
    value: number
    right: TreeNode | null
    left: TreeNode | null
}

const sumOfLeftLeaves = (root: TreeNode | null | undefined): number => {
    // Stopping conditions
    if (!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return root.value
    }

    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right?.left)
}

const v: TreeNode = {
    value: 5,
    right: {
        value: 12,
        right: { value: 8, right: null, left: null },
        left: { value: 3, right: null, left: null },
    },
    left: { value: 2, right: null, left: null },
}
console.log(sumOfLeftLeaves(v))

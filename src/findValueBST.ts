// This question is asked by Google. Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
// Note: all values in the binary search tree will be unique.

// Ex: Given the tree...

//         3
//        / \
//       1   4
// and the search value 1 return a reference to the node containing 1.

interface BSTNode {
    value: number,
    right: BSTNode,
    left: BSTNode
}

const findValue = (bstNode: BSTNode, valueToFind: number): number | undefined => {
    if (!bstNode) {
        return undefined
    }

    if (bstNode.value === valueToFind) {
        return bstNode
    }

    if (valueToFind < bstNode.value) {
        return findValue(bstNode.left, valueToFind)
    }

    return findValue(bstNode.right, valueToFind)
}


// Given an array of numbers sorted in ascending order, return a height-balanced binary search tree using every number from the array.
// Note: height-balanced meaning that the level of any node’s two subtrees should not differ by more than one.

// Ex: Given the following nums...

// nums = [1, 2, 3] return a reference to the following tree...
//        2
//       /  \
//      1    3
// Ex: Given the following nums...

// nums = [1, 2, 3, 4, 5, 6] return a reference to the following tree...
//         3
//        / \
//       2   5
//      /   / \
//     1   4   6

interface BSTNode {
    value: number
    right: BSTNode | undefined
    left: BSTNode | undefined
}

const arrayToBST = (arr: number[]): BSTNode | undefined => {
    if (!arr || arr.length === 0) {
        return undefined
    }

    if (arr.length === 1) {
        return { value: arr[0], left: undefined, right: undefined } as BSTNode
    }

    const middleIndex = Math.floor(arr.length / 2)
    const value = arr[middleIndex]
    const leftArr = arr.splice(0, middleIndex)
    const rightArr = arr.splice(1, arr.length)

    return {
        value,
        left: arrayToBST(leftArr),
        right: arrayToBST(rightArr),
    } as BSTNode
}

console.log(arrayToBST([1, 2, 3, 4, 5, 6]))

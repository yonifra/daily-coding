// Given the reference to the root of a binary tree, return the sum of all leaves at the deepest level.

// Ex: Given the following tree…

//       2
//      / \
//     4   5, return 9 (4 and 5 are at the deepest level and sum to 9).
// Ex: Given the following tree…

//       1
//        \
//         2
//          \
//           3, return 3.

interface Root {
    right: Root | undefined,
    left: Root | undefined,
    value: number
}

interface ReturnValue {
    level: number,
    value: number
}

const answer = {}

const addToAnswer = (level: number, value: number): void => {
    if (answer[level]) {
        answer[level].push(value)
    } else {
        answer[level] = [value]
    }
}

const deepestLeafSum = (root: Root, previousLevel: number, previousValue: number): ReturnValue => {
    if (!root) return {level: previousLevel, value: previousValue};
    const leftValue = deepestLeafSum(root.left, previousLevel + 1, previousValue + root.value)
    const rightValue = deepestLeafSum(root.right, previousLevel + 1, previousValue + root.value)

    addToAnswer(leftValue.level, leftValue.value)
    addToAnswer(rightValue.level, rightValue.value)
}

const getIt = (root: Root): number => {
    deepestLeafSum(root, -1, 0)
    const deepest = Math.max(+Object.keys(answer))
    return Math.max(answer[deepest])
}

console.log(getIt({value: 4, right: undefined, left: undefined}))
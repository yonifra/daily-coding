// Combination Sum - MEDIUM
// https://leetcode.com/problems/combination-sum/

function combinationSum(candidates: number[], target: number): number[][] {
    if (!candidates || candidates.length === 0) {
        return []
    }

    const result: number[][] = []
    let current: number[] = []

    function backtrack(index: number, total: number, current: number[]) {
        if (total === target) {
            result.push([...current])
            return
        }

        if (total > target) {
            return
        }

        for (let i = index; i < candidates.length; i++) {
            current.push(candidates[i])
            backtrack(i, total + candidates[i], current)
            current.pop()
        }
    }

    backtrack(0, 0, current)
    return result
}

console.log(combinationSum([2, 3, 6, 7], 7)) // Expected: [[2,2,3],[7]]

// Time complexity: O(N^target)

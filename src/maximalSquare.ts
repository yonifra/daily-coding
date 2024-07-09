// 221 - Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
// https://leetcode.com/problems/maximal-square/
let m: string[][]

function maximalSquare(matrix: string[][]): number {
    // The idea: run through the array in O(n x m) time
    // When you see a '1' value, recursively call a function that checks for all neighbors (left, right and diagonal)
    // if we see a 1, continue recursing.
    // if we see a 0, return the "depth" of the recursion so far.
    // Take the minimum depth of all recursive calls
    m = matrix
    let max = -Infinity

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                max = Math.max(max, recurse(i, j, 1))
            }
        }
    }

    return max * max
}

function recurse(x: number, y: number, depthSoFar: number): number {
    if (x >= m.length || x < 0 || y >= m[0].length || y < 0 || m[x][y] === '0')
        return depthSoFar

    return Math.min(
        depthSoFar + 1,
        recurse(x + 1, y, depthSoFar + 1),
        recurse(x, y + 1, depthSoFar + 1),
        recurse(x + 1, y + 1, depthSoFar + 1),
    )
}

// console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))
console.log(
    maximalSquare([
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '0',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '0',
            '0',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '0',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
        ],
        [
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
        ],
        [
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '0',
            '1',
            '0',
            '0',
        ],
        [
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '1',
            '0',
            '1',
            '1',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
            '1',
            '0',
            '1',
            '1',
            '1',
            '0',
            '1',
        ],
    ]),
)

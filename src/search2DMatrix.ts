// Search a 2D Matrix - Medium
// Problem: https://leetcode.com/problems/search-a-2d-matrix/

function searchMatrix(matrix: number[][], target: number): boolean {
    const rowSize = matrix[0].length
    const columnHeight = matrix.length
    let up = 0
    let down = columnHeight - 1

    while (up < down) {
        let mid = Math.floor((up + down)/2)
        if (target < matrix[mid][rowSize - 1]) {
            down = mid
        } else if (target > matrix[mid][rowSize - 1]) {
            up = mid + 1
        } else {
            return true;
        }
    }

    let left = 0;
    let right = matrix[0].length

    // we care about "down"

    while (left <= right) {
        let mid2 = Math.floor((left + right)/2)
        if (matrix[down][mid2] === target) {
            return true;
        } else if (matrix[down][mid2] < target) {
            left = mid2 + 1;
        } else {
            right = mid2 - 1;
        }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
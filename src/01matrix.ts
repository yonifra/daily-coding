// 01 Matrix
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// Link: https://leetcode.com/problems/01-matrix/

var updateMatrix = function (mat: number[][]): number[][] {
    let dirs = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ]
    let queue: number[][] = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0])
            } else {
                mat[i][j] = Infinity
            }
        }
    }

    // BFS
    while (queue.length) {
        const [currX, currY, val] = queue.shift();

        if (mat[currX][currY] > val) {
            mat[currX][currY] = val
        }

        for (const dir of dirs) {
            const [x, y, newVal] = [currX + dir[0], currY + dir[1], val + 1];

            if (x < 0 || y < 0 || x > mat.length - 1 || y > mat[0].length - 1)
                continue;

            if (mat[x][y] === Infinity) {
                queue.push([x, y, newVal])
            }
        }
    }

    return mat;
}

updateMatrix([[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]) // [[0,1,0,1,2],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]
// Find the shortest path from the top left to the bottom right corner of a 2D maze.
// You should only move up, down, left, or right.
// You cannot move diagonally through the maze.
// You cannot move through walls.
// The maze is represented as a 2D array where 0s represent walls and 1s represent open paths.
// Return the first valid path of the maze.
// Runtime: O(rows*cols)

function findShortestPath(maze: number[][]): number[][] {
    const rows = maze.length
    const cols = maze[0].length
    const path = []
    const visited = new Set()
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const queue = [[0, 0]]
    while (queue.length) {
        const [row, col] = queue.shift() as number[]
        if (row === rows - 1 && col === cols - 1) {
            path.push([row, col])
            return path
        }
        if (visited.has(`${row}-${col}`)) {
            continue
        }
        visited.add(`${row}-${col}`)
        path.push([row, col])
        for (const [r, c] of directions) {
            const newRow = row + r
            const newCol = col + c
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || maze[newRow][newCol] === 0) {
                continue
            }
            queue.push([newRow, newCol])
        }
    }
    return path.length ? path : []
}

findShortestPath([[0,0,0], [1,1,0], [1,1,0]])

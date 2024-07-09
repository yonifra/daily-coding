// Asked in Meta screening round
// Given a matrix of integers, print all the diagonals starting from the top right corner to the bottom left corner.
//

function printDiagonals(matrix: number[][]): void {
    if (!matrix || matrix.length === 0) {
        console.log('Empty matrix')
        return
    }

    const numRows = matrix.length
    const numCols = matrix[0].length

    // Loop over each element in the first row
    for (let col = 0; col < numCols; col++) {
        let diagonal = []
        let i = 0
        let j = col

        // Collect elements in the diagonal starting from (0, col)
        while (i < numRows && j >= 0) {
            diagonal.push(matrix[i][j])
            i++
            j--
        }

        // Print the collected diagonal
        console.log(diagonal.join(' '))
    }

    for (let row = 1; row < numRows; row++) {
        let diagonal = []
        let i = row
        let j = numCols - 1

        while (i < numRows && j >= 0) {
            diagonal.push(matrix[i][j])
            i++
            j--
        }

        console.log(diagonal.join(' '))
    }
}

// Example usage:
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

printDiagonals(matrix)

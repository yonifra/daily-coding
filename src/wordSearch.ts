// Word Search - https://leetcode.com/problems/word-search/ [MEDIUM]
// Given an m x n board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
// Input: board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCESEEEFS"
// Output: true
// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6

function exist(board: string[][], word: string): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word.charAt(0)) {
                if (find(board, word, i, j, 0, new Set())) {
                    return true;
                }
            }
        }
    }

    return false
};

function find(board: string[][], word: string, i: number, j: number, index: number, visited: Set<string>): boolean {
    // Word found
    if (index === word.length) {
        return true
    }


    // Out of bounds
    if (i > board.length - 1 || i < 0 || j > board[0].length - 1 || j < 0 || visited.has(`${i}-${j}`) || board[i][j] !== word.charAt(index)) {
        return false
    }

    visited.add(`${i}-${j}`)
    if(find(board, word, i + 1, j, index + 1, visited) ||
     find(board, word, i - 1, j, index + 1, visited) ||
     find(board, word, i, j + 1, index + 1, visited) ||
     find(board, word, i, j - 1, index + 1, visited)) {
        return true
     }

     visited.delete(`${i}-${j}`)
     return false
}


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // true
console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS")) // true

// ABCE
// SFES
// ADEE

// Idea:
// We start with the first letter of the word and then we check all the possible directions
// Insert the position as as the item of a set to avoid repeating the same position
// Stopping conditions:
// We got to the end of the word - return true
// We got out of bounds - return false
// We found a letter that is not the one we are looking for - return false
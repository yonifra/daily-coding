// Source: https://leetcode.com/problems/excel-sheet-column-title/
// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// For example:
// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

function convertToTitle(columnNumber: number): string {
    let result = ''

    while (columnNumber > 0) {
        columnNumber--
        result = String.fromCharCode((columnNumber % 26) + 65) + result
        columnNumber = Math.floor(columnNumber / 26)
    }

    return result
}

console.log(convertToTitle(701)) // "ZY"

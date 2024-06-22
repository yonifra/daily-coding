// Generate Parentheses - MEDIUM
// https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n: number): string[] {
    if (!n || n === 0) {
        return []
    }

    const arr = []

    generateParenthesisRec(n, arr, 1, 0, "(");

    return arr;
};

function generateParenthesisRec(n: number, arr: string[], openCount: number, closeCount: number, str: string): void {
    if (str.length === n*2) {
        arr.push(str)
        return;
    }

    if (openCount < n) {
        generateParenthesisRec(n, arr, openCount + 1, closeCount, str + "(")
    }

    if (closeCount < openCount) {
        generateParenthesisRec(n, arr, openCount, closeCount + 1, str + ")")
    }
}
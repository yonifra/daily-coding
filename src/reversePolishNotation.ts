// Evaluate Reverse Polish Notation - MEDIUM
// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

export function evalRPN(tokens: string[]): number {
    const ops = ['+', '-', '/', '*']

    for (let i = 0; i < tokens.length; i++) {
        if (ops.includes(tokens[i])) {
            i -= 2
            const res = calculate(tokens, i)
            tokens.splice(i, 2)
            tokens[i] = res.toString()
        }
    }

    return parseInt(tokens[0])
}

function calculate(tokens: string[], index: number): number {
    const firstNum = parseInt(tokens[index])
    const secondNum = parseInt(tokens[index + 1])
    switch (tokens[index + 2]) {
        case '-':
            return firstNum - secondNum
        case '+':
            return firstNum + secondNum
        case '*':
            return firstNum * secondNum
        case '/':
            return firstNum / secondNum
        default:
            return Number.NaN
    }
}

console.log(evalRPN(['2', '1', '+', '3', '*'])) // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])) // 6
console.log(
    evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
    ]),
) // 22

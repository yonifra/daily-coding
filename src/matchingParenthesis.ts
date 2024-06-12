// Valid Parentheses - Easy
// https://leetcode.com/problems/valid-parentheses
// Beats 98.5% of submissions

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string): boolean {
    if (!s || s.length % 2 === 1) {
        return false;
    }

    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i);

        if (Object.values(map).includes(currentChar)) {
            // This is an opening bracket
            stack.push(currentChar);
        } else {
            // this is a closing bracket, so we should check the matching
            const currentTopElement = stack.pop();
            if (currentTopElement !== map[currentChar]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("()]")); // false
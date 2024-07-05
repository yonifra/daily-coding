// Largest rectangle area in histogram - HARD
// https://leetcode.com/problems/largest-rectangle-in-histogram/
// Given an array of non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

function largestRectangleArea(heights: number[]): number {
    let stack: number[] = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        let height = heights[stack.pop()];
        let width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}

// Time Complexity: O(N)
console.log(largestRectangleArea([2,1,5,6,2,3]) === 10)
console.log(largestRectangleArea([2,4]) === 4)
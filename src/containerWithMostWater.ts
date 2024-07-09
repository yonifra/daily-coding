// Container With Most Water - [MEDIUM]
// https://leetcode.com/problems/container-with-most-water/
// Space: O(1)
// Time: O(n)

function maxArea(height: number[]): number {
    let right = height.length - 1
    let left = 0
    let maxHeight = -Infinity

    while (left < right) {
        const distance = right - left
        const currentHeight = Math.min(height[left], height[right])
        maxHeight = Math.max(distance * currentHeight, maxHeight)

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return maxHeight
}

// Example usage
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49

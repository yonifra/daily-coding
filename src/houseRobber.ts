// House Robber - Medium
// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums: number[]): number {
    if (!nums) return 0
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    const values = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        values.push(Math.max(values[i - 2] + nums[i], values[i - 1]))
    }

    return values[values.length - 1]
}

console.log(rob([1, 2, 3, 1])) // 4

// House Robber II - [MEDIUM]
// https://leetcode.com/problems/house-robber-ii/

function rob(nums: number[]): number {
    if (!nums) {
        return 0
    }

    if (nums.length === 1) {
        return nums[0]
    }

    let rob1 = 0
    let rob2 = 0
    let max1 = 0
    let max2 = 0

    for (let i = 0; i < nums.length - 1; i++) {
        let temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }

    max1 = rob2
    rob1 = 0
    rob2 = 0

    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }

    max2 = rob2

    return Math.max(max1, max2)
}

// Time complexity: O(n)
// Space complexity: O(1)
console.log(rob([2, 3, 2])) // 3
console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3])) // 3

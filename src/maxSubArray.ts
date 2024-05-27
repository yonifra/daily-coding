// Find the maximum sub-array sum
// Leetcode: https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums: number[]): number {
    if (!nums || nums.length === 0) {
        return 0
    }

    let max = nums[0]
    let localMax = nums[0]

    // we start off from 1 since we already calculated index 0
    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax + nums[i])
        max = Math.max(max, localMax)
    }

    return max
};
// Three Sum Closest - MEDIUM
// https://leetcode.com/problems/3sum-closest/
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

function threeSumClosest(nums: number[], target: number): number {
    // Sort the array
    nums.sort((a, b) => a - b)
    let closestSum = Infinity

    for (let i = 0; i < nums.length - 2; i++) {
        // Two pointers
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            // If the current sum is closer to the target, update the closestSum
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum
            }

            if (sum === target) {
                // If the sum is exactly the target, return it
                return sum
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }

    return closestSum
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
console.log(threeSumClosest([0, 0, 0], 1)) // 0
console.log(threeSumClosest([1, 1, 1, 0], -100)) // 2

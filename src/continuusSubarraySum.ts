//https://leetcode.com/problems/continuous-subarray-sum
// LeetCode: #523 Continuous Subarray Sum [MEDIUM]
// Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2
// that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

// Example 1:
// Input: [23, 2, 4, 6, 7], k = 6
// Output: True
// Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

// Example 2:
// Input: [23, 2, 6, 4, 7], k = 6
// Output: True
// Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

export function checkSubarraySum(nums: number[], k: number): boolean {
    if (k === 0 && nums.length > 0 && nums[0] > 0) {
        return false;
    }

    const map: any = { '0': -1 }
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        const remainder = sum % k

        if (map[remainder] !== undefined) {
            if (i - map[remainder] >= 2) {
                return true
            }
        } else {
            map[remainder] = i
        }
    }

    return false
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)) // true
console.log(checkSubarraySum([2, 4, 3], 6)) // true
console.log(checkSubarraySum([0, 0], 0)) // true

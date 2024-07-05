// Minimum Length Subarray Sum - MEDIUM
// Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.
// https://www.leetcode.com/problems/minimum-size-subarray-sum/

function minSubArrayLen(target: number, nums: number[]): number {
if (!nums || nums.length === 0) {
        return 0;
    }

    let min = Infinity;
    let left = 0;
    let right = 0;
    let sum = nums[0]

    while (right < nums.length) {
        if (sum === target) {
            min = Math.min(min, right - left + 1)
        }

        if (sum < target || right === left) {
            right++
            sum += nums[right]
        } else {
            sum -= nums[left]
            left++;
        }

    }

    return min === Infinity ? 0 : min;
};

// Time Complexity: O(N)
console.log(minSubArrayLen(7, [2,3,1,2,4,3]) === 2)
console.log(minSubArrayLen(4, [1,4,4]) === 1)
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]) === 0)
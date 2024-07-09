// 4Sum - MEDIUM
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// https://leetcode.com/problems/4sum/

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b) // Step 1: Sort the array
    const result = []

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue // Skip duplicates for i

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue // Skip duplicates for j

            let left = j + 1
            let right = nums.length - 1

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    // Skip duplicates for left
                    while (left < right && nums[left] === nums[left + 1]) left++
                    // Skip duplicates for right
                    while (left < right && nums[right] === nums[right - 1])
                        right--

                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    return result
}

// time complexity: O(N^3)

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)) // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)) // [[2,2,2,2]]

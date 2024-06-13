// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Remove Duplicates [MEDIUM]
// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

function removeDuplicates(nums: number[]): number {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
        if (map[nums[i]] === 2) {
            nums.splice(i, 1)
            i--
        } else {
            map[nums[i]]++
        }
    } else {
        map[nums[i]] = 1
    }
  }

  return nums.length
};

console.log(removeDuplicates([1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3])) // 5
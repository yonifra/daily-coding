// 128 - Longest consecutive
// https://leetcode.com/problems/longest-consecutive-sequence/
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let maxSequence = 0

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i] - 1)) {
            continue
        }

        // this is the beginning of a new sequence
        let j = 1
        while (set.has(nums[i] + j)) {
            j++
        }

        maxSequence = Math.max(maxSequence, j)
    }

    return maxSequence
}

console.log(longestConsecutive([1, 2, 100, 3, 400, 4])) // 4

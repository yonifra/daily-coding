// Contiguous Array [Medium]
// Source: https://leetcode.com/problems/contiguous-array/
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

export function findMaxLength(nums: number[]): number {
    let count = 0
    let max = 0
    let map = new Map()
    map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1
        if (map.has(count)) {
            max = Math.max(max, i - map.get(count))
        } else {
            map.set(count, i)
        }
    }
    return max
}

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0]))

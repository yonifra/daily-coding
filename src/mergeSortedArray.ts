// Merge Sorted Array - EASY
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m === 0) {
        nums1[0] = nums2[0]
    }

    if (n === 0){
        return
    }
    let right1 = m - 1;
    let right2 = n - 1;
    let leftMost = nums1.length - 1;

    while (right1 >= 0 && right2 >= 0) {
        if (nums1[right1] > nums2[right2]) {
            nums1[leftMost] = nums1[right1]
            leftMost--
            right1--
        } else {
            nums1[leftMost] = nums2[right2]
            right2--
            leftMost--
        }
    }

    for (let i = 0; i <= right2; i++) {
        nums1[i] = nums2[i]
    }
};

// Testcase 1
let nums0 = [1,2,3,0,0,0]
merge(nums0, 3, [2,5,6], 3)
console.log(nums0) // [1,2,2,3,5,6]

// Testcase 2
let nums1 = [1]
merge(nums1, 1, [], 0)
console.log(nums1) // [1]
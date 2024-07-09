// Find the minimum element in a rotated sorted array - Medium
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums) {
    let left = 0
    let right = nums.length - 1

    // If the array is not rotated or has only one element
    if (nums[left] < nums[right] || nums.length === 1) {
        return nums[0]
    }

    while (left < right) {
        let middle = Math.floor((left + right) / 2)

        // If the middle element is greater than the element at the right,
        // it means the smallest value is in the right half.
        if (nums[middle] > nums[right]) {
            left = middle + 1
        } else {
            // If the middle element is less than the element at the right,
            // it means the smallest value is in the left half including the middle.
            right = middle
        }
    }

    // When the while loop ends, left and right converge to the smallest value.
    return nums[left]
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
console.log(findMin([3, 4, 5, 1, 2])) // 1

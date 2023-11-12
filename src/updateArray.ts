// Given an integer array, nums, replace each element with the largest value that occurs to the right of it and return the array.
// Note: The rightmost element should be replaced with -1.

// Ex: Given the following nums…

// nums = [5, 2, 3], return [3, 3, -1].

const findMax = (nums: number[], start: number, end: number): number => {
    if (start >= end) {
        return -1
    }

    let currentMax = -1
    for (let j = start; j <= end; j++) {
        if (nums[j] > currentMax) {
            currentMax = nums[j]
        }
    }

    return currentMax
}

const updateArray = (nums: number[]): number[] => {
    const updatedArray = [...nums]

    for (let i = 0; i < nums.length; i++) {
        updatedArray[i] = findMax(nums, i + 1, nums.length)
    }

    return updatedArray
}

console.log(updateArray([5, 2, 3]))
console.log(updateArray([10, 2, 5, 8, 9]))

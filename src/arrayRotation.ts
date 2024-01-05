// Given an integer array, nums, return whether or not the array was originally sorted in non-decreasing order and then rotated some number of positions.

const isSorted = (arr: number[]): boolean => {
    return arr.every((num, index) => index === 0 || num >= arr[index - 1])
}

const isRotated = (nums: number[]): boolean => {
    let breakingPoint = -1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (breakingPoint > -1) {
                return false
            }

            breakingPoint = i
        }
    }

    const firstHalf = nums.slice(0, breakingPoint)
    const secondHalf = nums.slice(breakingPoint)
    const newArray = [...secondHalf, ...firstHalf]

    return isSorted(newArray)
}

isRotated([4, 5, 1, 2, 3, 6]) // should return false
isRotated([4, 5, 1, 2, 3]) // should return true

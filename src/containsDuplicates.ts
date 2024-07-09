var containsDuplicate = function (nums: number[]): Boolean {
    return new Set(nums).size !== nums.length
}

// Product of array except self - MEDIUM
// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const answer = new Array(n).fill(1)

    // Step 1: Calculate left products
    let leftProduct = 1
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct
        leftProduct *= nums[i]
    }

    // Step 2: Calculate right products and multiply with left products
    let rightProduct = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return answer
}

console.log(productExceptSelf([1, 2, 3, 4])) // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0,0,9,0,0]

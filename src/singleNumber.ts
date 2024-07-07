// Single Number - EASY
// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let xor = 0;

    for (let i of nums) {
        xor =  xor ^ i
    }

    return xor
};

// TIME: O(n)
// SPACE: O(1)
console.log(singleNumber([2,2,1])) // 1
console.log(singleNumber([4,1,2,1,2])) // 4
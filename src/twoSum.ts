// This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)

// Solution runtime is O(n) linear time worst case since we iterate through the array once and use a set to check if the difference between the target and the current value is in the set.


const twoSum = (arr: number[], target: number): boolean => {
    const set = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        if (set.has(target - arr[i])) {
            return true;
        }
    }

    return false;
}

console.log(twoSum([1, 3, 8, 2], 10));
console.log(twoSum([3, 9, 13, 7], 8));
console.log(twoSum([4, 2, 6, 5, 2], 4));
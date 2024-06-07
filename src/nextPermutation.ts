// Link: https://leetcode.com/problems/next-permutation/

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

function nextPermutation(nums: number[]): void {
    // Step 1: Find the largest index k such that nums[k] < nums[k + 1].
    let k = nums.length - 2;
    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k--;
    }

    if (k === -1) {
        // If no such index exists, reverse the array
        nums.reverse();
        return;
    }

    // Step 2: Find the largest index l greater than k such that nums[k] < nums[l].
    let l = nums.length - 1;
    while (l > k && nums[l] <= nums[k]) {
        l--;
    }

    // Step 3: Swap the value of nums[k] with that of nums[l].
    [nums[k], nums[l]] = [nums[l], nums[k]];

    // Step 4: Reverse the sequence from nums[k + 1] to the end.
    let left = k + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

const nums = [1,2,3]
nextPermutation(nums); // [1, 3, 2]
console.log(nums);
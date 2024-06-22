// 3Sum problem - [MEDIUM]
// https://leetcode.com/problems/3sum/
// The idea here is to first sort the array, then iterate through the array and for each element, use two pointers to find the other two elements that sum to 0.
// We skip duplicates and increment the pointers accordingly.

// Time complexity: O(n^2) - we iterate through the array and for each element, we use two pointers to find the other two elements.
// Space complexity: O(1) - we don't use any extra space.

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a - b); // order by descending
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            // Skip duplicates
            continue;
        }
        let left = i+1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i]
            if (sum > 0) {
                right -= 1;
            } else if (sum < 0) {
                left += 1;
            } else {
                ans.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while(nums[left - 1] === nums[left] && left < right) {
                    left += 1;
                }
            }
        }
    }

    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
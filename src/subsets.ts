// Subsets - MEDIUM
// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
// https://leetcode.com/problems/subsets

function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (start: number, path: number[]) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
}

function subsetsNeetcode(nums: number[]): number[][] {
    const result: number[][] = [];
    const subset: number[] = [];

    // do magic
    function dfs(index: number) {
        if (index >= nums.length) {
            result.push([...subset])
            return;
        }

        subset.push(nums[index])
        dfs(index + 1)

        subset.pop();
        dfs(index + 1);
    }

    dfs(0);

    return result;
}

console.log(subsets([1,2,3]))
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0]))
// Output: [[],[0]]
console.log(subsetsNeetcode([1,2,3]))
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsetsNeetcode([0]))
// Output: [[],[0]]
// Permutations - MEDIUM
// Given a collection of distinct integers, return all possible permutations.
// https://leetcode.com/problems/permutations/

function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const backtrack = (path: number[]) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let num of nums) {
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(path);
            path.pop();
        }
    }
    backtrack([]);
    return result;
}

console.log(permute([1,2,3]))
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0,1]))
// Output: [[0,1],[1,0]]
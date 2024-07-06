function subsetsWithDup(nums: number[]): number[][] {
    const result = [];
    nums.sort((a, b) => a - b);
    const backtrack = (start, path) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1])
                continue;
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return result;
}

console.log(subsetsWithDup([4,1,0])) // Expected: [[],[0],[0,1],[0,1,4],[0,4],[1],[1,4],[4]]
console.log(subsetsWithDup([1,2,2]))
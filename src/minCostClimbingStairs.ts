// Min Cost Climbing Stairs - EASY
// https://leetcode.com/problems/min-cost-climbing-stairs/
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

function minCostClimbingStairs(cost: number[]): number {
    if (!cost || cost.length === 0) {
        return 0;
    }

    if (cost.length === 1) {
        return cost[0]
    }

    const dp = new Array(cost.length);
    dp[0] = cost[0]
    dp[1] = cost[1]
    let min = Math.min(dp[0], dp[1]);

    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i])
        min = Math.min(dp[i-1], dp[i])
    }

    return min
};

// Time complexity: O(n)
console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
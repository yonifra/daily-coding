// https://leetcode.com/problems/climbing-stairs/
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n: number): number {
    if (n <= 2) return n

    let dp = new Array(n + 1)
    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]
}

// Time complexity: O(n)
// Space complexity: O(n)
console.log(climbStairs(44)) // 1134903170

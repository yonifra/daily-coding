// Coin Change II - MEDIUM
// https://leetcode.com/problems/coin-change-ii
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

function change(amount: number, coins: number[]): number {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
}

console.log(change(5, [1, 2, 5])) // Expected: 4
console.log(change(3, [2])) // Expected: 0
console.log(change(10, [10])) // Expected: 1

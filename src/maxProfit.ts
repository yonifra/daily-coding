// Source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i])
        profit = Math.max(profit, prices[i] - buy);
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
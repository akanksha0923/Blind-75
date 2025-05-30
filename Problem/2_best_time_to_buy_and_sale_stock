/*
  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/


var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]) //This keeps updating buy to the lowest price seen so far.
        profit = Math.max(profit, prices[i] - buy) //This ensures we always record the best profit possible at each step.
    }
    return profit;
};

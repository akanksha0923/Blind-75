/*
https://leetcode.com/problems/coin-change/
https://www.youtube.com/watch?v=H9bfqozjoqs

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

- if we use brute force using recursion 
    -- then you will be solving same smaller problems again  and again
- top down DP approach
- do not go further down if coin[i] - amount <= 0
- start from i = 1 cos we have already inserted dp[0] = 0
*/



// Way 1: O(S^n) where S = amount, n = number of coins
function coinChange(coins, amount) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minCoins = Infinity;

    for (let coin of coins) {
        let res = coinChange(coins, amount - coin);
        if (res >= 0) {
            minCoins = Math.min(minCoins, res + 1);
        }
    }

    return minCoins === Infinity ? -1 : minCoins;
}


// Way 2: O(n * amount) , n = number of coins
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}


// Way 3: O(n * amount) , n = number of coins
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

/*
https://leetcode.com/problems/longest-common-subsequence/description/

A subsequence is just a “filtered” version of a string where:
  - You can skip characters,
  - But you cannot change the order.


Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
};
